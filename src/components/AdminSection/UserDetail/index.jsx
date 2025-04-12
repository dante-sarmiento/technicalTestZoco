import React, { useState, useEffect } from 'react'

//Components
import Input from '../../Input'
import ButtonText from '../../ButtonText';
import ButtonsGrid from '../../ButtonsGrid'
import { translate } from '../../../helpers/traductionTexts';

//Api
import { getAddresses } from '../../../api/address'
import { getStudies } from '../../../api/studies'
import CustomSwitch from '../../Switch';

//Context
import { useAuth } from '../../../context/AuthProvider';

const roles = [
    { value: "admin" },
    { value: "client" }
]

const sections = [
    { value: "direcciones", label: "Direcciones" },
    { value: "estudios", label: "Estudios" }
]

const UserDetail = ({ user, updateUser, role }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [form, setForm] = useState({ ...user });
    const [addresses, setAddresses] = useState([]);
    const [studies, setStudies] = useState([]);
    const [sectionSelected, setSectionSelected] = useState(sections[0])
    const { setLoader } = useAuth()

    useEffect(() => {
        if (!user) return;

        const fetchData = async () => {
            setLoader(true)
            try {
                const dataAddress = await getAddresses();
                const dataStudies = await getStudies();

                setAddresses(dataAddress.filter(a => a.userId === user.id));
                setStudies(dataStudies.filter(s => s.userId === user.id));
            } catch (error) {
                console.error("Error fetchData", error);
            }
            setLoader(false)
        };

        fetchData();
    }, [user]);

    const handleSection = (sect) => {
        setSectionSelected(sect)
    }

    const handleChange = (section, field, value) => {
        if (section) {
            setForm(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value,
                },
            }));
        } else {
            setForm(prev => ({ ...prev, [field]: value }));
        }
    };

    const handleSubmit = () => {
        updateUser({
            ...form,
            addresses,
            studies,
        });
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setIsEditing(false)
        setForm({ ...user })
    }

    const stylesLabels = "text-white text-sm font-normal"

    return (
        <div className='w-full p-4 flex flex-col justify-start items-center gap-3 rounded-xl bg-gray_600 '>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-xl font-semibold text-white'>
                    Datos del usuario
                </h1>
                {!isEditing ?
                    <ButtonText
                        text='Editar'
                        classButton='bg-primary rounded-lg text-white font-semibold px-2 py-1 flex items-center gap-2'
                        handleClick={() => setIsEditing(true)}
                    /> :
                    <ButtonText
                        text='Cancelar'
                        classButton='bg-gray_700 rounded-lg text-white font-semibold px-2 py-1 flex items-center gap-2'
                        handleClick={cancelEdit}
                    />
                }
            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-3'>
                <div className='flex flex-col justify-start items-start gap-1 w-full'>
                    <p className={stylesLabels}>
                        Nombre
                    </p>
                    <Input
                        type='text'
                        field="firstName"
                        section={null}
                        placeholder='Nombre'
                        value={form.firstName}
                        handleChange={handleChange}
                        isEditing={isEditing} />
                </div>
                <div className='flex flex-col justify-start items-start gap-1 w-full'>
                    <p className={stylesLabels}>
                        Apellido
                    </p>
                    <Input
                        type='text'
                        field="lastName"
                        section={null}
                        placeholder='Apellido'
                        value={form.lastName}
                        handleChange={handleChange}
                        isEditing={isEditing} />
                </div>
                <div className='flex flex-col justify-start items-start gap-1 w-full'>
                    <p className={stylesLabels}>
                        Email
                    </p>
                    <Input
                        type='email'
                        field="email"
                        section={null}
                        placeholder='Email'
                        value={form.email}
                        handleChange={handleChange}
                        isEditing={isEditing} />
                </div>
                <div className='flex flex-col justify-start items-start gap-1 w-full'>
                    <p className={stylesLabels}>
                        Rol
                    </p>
                    <Input
                        type='text'
                        field="role"
                        section={null}
                        placeholder='Rol'
                        value={form.role}
                        handleChange={handleChange}
                        isEditing={isEditing}
                        role={role}
                        dataSelect={roles} />
                </div>
            </div>
            <ButtonsGrid
                data={sections}
                dataSelected={sectionSelected}
                handleData={handleSection} />

            {addresses.length > 0 && sectionSelected.value == "direcciones" && (
                addresses.map((study, idx) => (
                    <div key={idx} className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 bg-dark rounded-xl p-4 mb-4">
                        {['country', 'state', 'city', 'street', 'number'].map((field) => (
                            <div key={field} className="flex flex-col justify-start items-start gap-1 w-full">
                                <p className={stylesLabels}>{translate(field)}</p>
                                <Input
                                    type="text"
                                    value={study[field]}
                                    field={field}
                                    section={`address-${study.id}`}
                                    placeholder=""
                                    handleChange={(section, field, value) => {
                                        setAddresses(prev =>
                                            prev.map(a => a.id === study.id ? { ...a, [field]: value } : a)
                                        );
                                    }}
                                    isEditing={isEditing}
                                />
                            </div>
                        ))}
                    </div>
                ))
            )}

            {studies.length > 0 && sectionSelected.value == "estudios" && (
                studies.map((study, idx) => (
                    <div key={idx} className="w-full grid grid-cols-1 md:grid-cols-5 gap-3 bg-dark rounded-xl p-4 mb-4">
                        {['university', 'career', 'graduated'].map((field) => (
                            <div key={field} className={field == "graduated" ? "col-span-1 flex flex-col md:justify-between items-start md:items-center gap-1 w-full" : "md:col-span-2 flex flex-col justify-center items-start gap-1 w-full"}>
                                <p className={stylesLabels}>{translate(field)}</p>
                                {field == "graduated" ?
                                    <CustomSwitch
                                        value={study.graduated} />
                                    :
                                    <Input
                                        type="text"
                                        value={study[field]}
                                        field={field}
                                        section={`address-${study.id}`}
                                        placeholder=""
                                        handleChange={(section, field, value) => {
                                            setStudies(prev =>
                                                prev.map(a => a.id === study.id ? { ...a, [field]: value } : a)
                                            );
                                        }}
                                        isEditing={isEditing}
                                    />
                                }
                            </div>
                        ))}
                    </div>
                ))
            )}
            {isEditing && (
                <ButtonText
                    text='Guardar'
                    classButton='bg-green-700 transition-all transition-discrete delay-100 duration-200 hover:bg-green-600 rounded-lg text-white font-semibold px-2 py-1 flex items-center gap-2'
                    handleClick={handleSubmit} />
            )}
        </div>
    )
}

export default UserDetail