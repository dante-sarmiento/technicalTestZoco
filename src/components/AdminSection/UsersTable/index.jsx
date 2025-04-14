import React from 'react'

//Components
import ButtonText from '../../ButtonText'
import CustomImage from '../../CustomImage'

//Helpers
import { translate } from '../../../helpers/traductionTexts'

const UsersTable = ({ data, handleSelecetUser, handleNewUSer }) => {
  return (
    <div className="overflow-x-auto w-full">
      <div className='w-full p-4 flex flex-col gap-3 rounded-xl bg-gray_600'>
        <div className='w-full flex justify-between items-center'>

          <h2 className="text-xl text-white font-bold">Lista de Usuarios</h2>
          <ButtonText
            text='Nuevo usuario'
            classButton='bg-primary rounded-lg text-white font-semibold px-2 py-1 flex items-center gap-2'
            img='/img/addUser.png'
            handleClick={handleNewUSer} />
        </div>
        <div className='w-full flex flex-col h-auto justify-start items-start border rounded shadow'>
          <div className="w-full flex justify-between items-center border-b bg-dark px-2">
            <p className="headersTable py-2 w-1/4 mobile:hidden md:flex">Nombre</p>
            <p className="headersTable py-2 w-1/4 mobile:hidden md:flex">Apellido</p>
            <p className="headersTable py-2 w-1/4">Email</p>
            <p className="headersTable py-2 w-1/4 mobile:hidden md:flex">Rol</p>
            <p className="headersTable py-2 "></p>
          </div>
          <div className='w-full flex flex-col justify-start items-start bg-gray_900'>
            {data.map((user) => (
              <div key={user.id} className="w-full hover:bg-gray_700 border-b flex justify-between items-center px-2">
                <p className="bodyTable py-2 w-1/4 mobile:hidden md:flex">{user.firstName}</p>
                <p className="bodyTable py-2 w-1/4 mobile:hidden md:flex">{user.lastName}</p>
                <p className="bodyTable py-2 w-1/4 ">{user.email}</p>
                <p className="bodyTable py-2 w-1/4 capitalize mobile:hidden md:flex">{translate(user.role)}</p>
                <div className="bodyTable cursor-pointer px-4 md:px-0 py-2" onClick={() => handleSelecetUser(user)}>
                  <CustomImage
                    url='/img/eye.svg'
                    classImg='w-[20px] h-[20px]' />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default UsersTable