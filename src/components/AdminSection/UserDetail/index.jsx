import React, { useState, useEffect } from 'react'

//Components
import Input from '../../Input'
import ButtonText from '../../ButtonText'
import ButtonsGrid from '../../ButtonsGrid'
import { translate } from '../../../helpers/traductionTexts'
import CustomSwitch from '../../Switch'

//Context
import { useAuth } from '../../../context/AuthProvider'
import { useData } from '../../../context/DataProvider'

const roles = [
  { value: 'admin' },
  { value: 'client' }
]

const sections = [
  { value: 'direcciones', label: 'Direcciones' },
  { value: 'estudios', label: 'Estudios' }
]

const UserDetail = ({ user, updateUser, role, isNewUserForm = false, submitNewUser }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [form, setForm] = useState({ ...user })
  const [addresses, setAddresses] = useState([])
  const [studies, setStudies] = useState([])
  const [sectionSelected, setSectionSelected] = useState(sections[0])

  const { setLoader } = useAuth()
  const {
    addressesProvider,
    studiesProvider,
    saveAddress,
    saveStudy,
  } = useData()

  useEffect(() => {
    if (!user) return

    setLoader(true)
    setAddresses(
      addressesProvider.filter((a) => a.userId === user.id)
    )
    setStudies(
      studiesProvider.filter((s) => s.userId === user.id)
    )
    setLoader(false)
  }, [user, addressesProvider, studiesProvider])

  const handleSection = (sect) => {
    setSectionSelected(sect)
  }

  const handleChange = (section, field, value) => {
    if (section) {
      setForm((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }))
    } else {
      setForm((prev) => ({ ...prev, [field]: value }))
    }
  }
console.log(isNewUserForm);
  const handleSubmit = () => {
    if (isNewUserForm) {
      submitNewUser({
        ...form
      })
    } else {
      updateUser({
        ...form
      })
      saveAddress(addresses);
      saveStudy(studies);
    }

    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false)
    setForm({ ...user })
    setAddresses(
      addressesProvider.filter((a) => a.userId === user.id)
    )
    setStudies(
      studiesProvider.filter((s) => s.userId === user.id)
    )
  }

  const newForm = () => {
    setIsEditing(true)
    if (sectionSelected.value == "direcciones") {
      const newAddress = {
        id: Date.now(),
        userId: user.id,
        street: '',
        number: '',
        city: '',
        state: '',
        country: ''
      };
      setAddresses(prev => [newAddress, ...prev]);
    } else {
      const newStudy = {
        id: Date.now(),
        userId: user.id,
        university: '',
        career: '',
        graduated: false
      };
      setStudies(prev => [newStudy, ...prev]);
    }
  }

  const registerDelete = (registerId) => {
    if (sectionSelected.value == "direcciones") {
      setAddresses(prev => prev.filter(a => a.id !== registerId))
    } else {
      setStudies(prev => prev.filter(s => s.id !== registerId))
    }
  }

  const stylesLabels = 'text-white text-sm font-normal'

  return (
    <div className='w-full p-4 flex flex-col justify-start items-center gap-3 rounded-xl bg-gray_600 '>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-xl font-semibold text-white'>Datos del usuario</h1>
        {!isEditing ? (
          <ButtonText
            text='Editar'
            classButton='border border-primary rounded-lg text-white font-semibold px-2 py-1 flex items-center gap-2'
            handleClick={() => setIsEditing(true)}
            img='/img/editIcon.svg'
          />
        ) : (
          <ButtonText
            text='Cancelar'
            classButton='bg-gray_700 rounded-lg text-white font-semibold px-2 py-1 flex items-center gap-2'
            handleClick={cancelEdit}
          />
        )}
      </div>

      <div className='w-full grid mobile:grid-cols-1 md:grid-cols-3 gap-3'>
        {[
          { label: 'Nombre', field: 'firstName' },
          { label: 'Apellido', field: 'lastName' },
          { label: 'Email', field: 'email', type: 'email' },
          { label: 'Rol', field: 'role' }
        ]
          .filter(({ field }) => field !== "role" || role === "admin")
          .map(({ label, field, type = 'text' }) => (
            <div key={field} className='flex flex-col justify-start items-start gap-1 w-full'>
              <p className={stylesLabels}>{label}</p>
              <Input
                type={type}
                field={field}
                section={null}
                placeholder={label}
                value={form[field]}
                handleChange={handleChange}
                isEditing={isEditing}
                role={role}
                dataSelect={field === 'role' ? roles : undefined}
              />
            </div>
          ))}
        {isNewUserForm && (
          <div key="pass" className='flex flex-col justify-start items-start gap-1 w-full'>
            <p className={stylesLabels}>Contraseña</p>
            <Input
              type="password"
              field={"password"}
              section={null}
              placeholder={"Contraseña"}
              value={form.password}
              handleChange={handleChange}
              isEditing={isEditing}
              role={role}
              dataSelect={undefined}
            />
          </div>

        )}
      </div>

      <div className="w-full flex mobile:flex-col md:flex-row mobile:justify-start md:justify-between items-center gap-y-2 md:items-center">
        <ButtonsGrid
          data={sections}
          dataSelected={sectionSelected}
          handleData={handleSection}
        />
        <ButtonText
          text={`Añadir ${sectionSelected.label}`}
          classButton='px-2 py-1 bg-primary text-white rounded-lg flex justify-center items-center font-semibold gap-2 text-sm md:text-lg'
          img='/img/addIcon.svg'
          handleClick={newForm} />
      </div>

      {addresses.length > 0 && sectionSelected.value === 'direcciones' && (
        addresses.map((address, idx) => (
          <div key={idx} className='w-full grid mobile:grid-cols-1 md:grid-cols-2 gap-3 bg-dark rounded-xl p-4 mb-4'>
            {['country', 'state', 'city', 'street', 'number'].map((field) => (
              <div key={field} className='flex flex-col justify-start items-start gap-1 w-full'>
                <p className={stylesLabels}>{translate(field)}</p>
                <Input
                  type='text'
                  value={address[field]}
                  field={field}
                  section={`address-${address.id}`}
                  placeholder=''
                  handleChange={(section, field, value) => {
                    setAddresses((prev) =>
                      prev.map((a) =>
                        a.id === address.id ? { ...a, [field]: value } : a
                      )
                    )
                  }}
                  isEditing={isEditing}
                />
              </div>
            ))}
            {isEditing && (
              <div className="w-full flex justify-end items-end">
                <ButtonText
                  text=""
                  classButton='px-2 py-1 border border-red_700 transition-all transition-discrete delay-100 duration-200 hover:bg-red_700 text-white rounded-lg flex justify-center items-center font-semibold gap-2'
                  img='/img/deleteIcon.svg'
                  handleClick={() => registerDelete(address.id)} />
              </div>
            )}
          </div>
        ))
      )}

      {studies.length > 0 && sectionSelected.value === 'estudios' && (
        studies.map((study, idx) => (
          <div key={idx} className='w-full grid grid-cols-1 gap-3 bg-dark rounded-xl p-4 mb-4'>
            {['university', 'career', 'graduated'].map((field) => (
              <div
                key={field}
                className={
                  field === 'graduated'
                    ? 'col-span-1 flex flex-col md:justify-between items-start md:items-center gap-1 w-full'
                    : 'md:col-span-2 flex flex-col justify-center items-start gap-1 w-full'
                }
              >
                <p className={stylesLabels}>{translate(field)}</p>
                {field === 'graduated' ? (
                  <CustomSwitch
                    value={study.graduated}
                    onChange={(val) => {
                      setStudies((prev) =>
                        prev.map((s) =>
                          s.id === study.id ? { ...s, graduated: val } : s
                        )
                      )
                    }}
                    isEditing={isEditing}
                  />
                ) : (
                  <Input
                    type='text'
                    value={study[field]}
                    field={field}
                    section={`study-${study.id}`}
                    placeholder=''
                    handleChange={(section, field, value) => {
                      setStudies((prev) =>
                        prev.map((s) =>
                          s.id === study.id ? { ...s, [field]: value } : s
                        )
                      )
                    }}
                    isEditing={isEditing}
                  />
                )}
              </div>
            ))}
            {isEditing && (
              <div className="w-full flex justify-end items-end">
                <ButtonText
                  text=""
                  classButton='px-2 py-1 border border-red_700 transition-all transition-discrete delay-100 duration-200 hover:bg-red_700 text-white rounded-lg flex justify-center items-center font-semibold gap-2'
                  img='/img/deleteIcon.svg'
                  handleClick={() => registerDelete(study.id)} />
              </div>
            )}
          </div>
        ))
      )}

      {isEditing && (
        <ButtonText
          text='Guardar'
          classButton='bg-green_700 transition-all transition-discrete delay-100 duration-200 hover:bg-green_600 rounded-lg text-white font-semibold px-2 py-1 flex items-center gap-2'
          handleClick={handleSubmit}
        />
      )}
    </div>
  )
}

export default UserDetail
