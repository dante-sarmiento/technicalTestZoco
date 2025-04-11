import React, { useState } from 'react'

//Components
import Input from '../../Input'
import ButtonText from '../../ButtonText';
import { translate } from '../../../helpers/traductionTexts';

const roles = [
    { value: "admin" },
    { value: "client" }
]

const UserDetail = ({ user, updateUser, role }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [form, setForm] = useState({ ...user });

    const handleChange = (section, field, value) => {
        console.log(value);
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
        updateUser(form);
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
            <div className='w-full grid grid-cols-4 gap-3'>
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

            <div className='w-full grid grid-cols-2 gap-3'>
                <div className='w-full grid grid-cols-2 gap-3 bg-dark rounded-xl p-4'>
                    {['country', 'state', 'city', 'street', 'number'].map(field => (
                        <div className='flex flex-col justify-start items-start gap-1 w-full' key={field}>
                            <p className={stylesLabels}>
                                {translate(field)}
                            </p>
                            <Input
                                type='text'
                                field={field}
                                section={"address"}
                                placeholder=''
                                value={form.address[field]}
                                handleChange={handleChange}
                                isEditing={isEditing} />
                        </div>
                    ))}
                </div>

                <div className='w-full grid grid-cols-2 gap-3 bg-dark rounded-xl p-4'>
                    {['university', 'career'].map(field => (
                        <div className='flex flex-col justify-start items-start gap-1 w-full' key={field}>
                            <p className={stylesLabels}>
                                {translate(field)}
                            </p>
                            <Input
                                type='text'
                                field={field}
                                section={"studies"}
                                placeholder=''
                                value={form.studies[field]}
                                handleChange={handleChange}
                                isEditing={isEditing} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-center items-center'>
                {isEditing && (
                    <ButtonText
                        text='Guardar'
                        classButton='bg-green-700 transition-all transition-discrete delay-100 duration-200 hover:bg-green-600 rounded-lg text-white font-semibold px-2 py-1 flex items-center gap-2'
                        handleClick={handleSubmit} />
                )}
            </div>
        </div>
    )
}

export default UserDetail