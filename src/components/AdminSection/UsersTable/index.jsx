import React from 'react'
import ButtonText from '../../ButtonText'
import { translate } from '../../../helpers/traductionTexts'
import CustomImage from '../../CustomImage'

const UsersTable = ({ data, handleSelecetUser }) => {
  return (
    <div className="overflow-x-auto w-full">
      <div className='w-full p-4 flex flex-col gap-3 rounded-xl bg-gray_600'>
        <div className='w-full flex justify-between items-center'>

          <h2 className="text-xl text-white font-bold">Lista de Usuarios</h2>
          <ButtonText
            text='Nuevo usuario'
            classButton='bg-primary rounded-lg text-white font-semibold px-2 py-1 flex items-center gap-2'
            img='/img/addUser.png' />
        </div>
        <table className="min-w-full border rounded shadow">
          <thead className="border-b bg-dark">
            <tr>
              <th className="headersTable py-2 px-4 hidden md:block">Nombre</th>
              <th className="headersTable py-2 px-4 hidden md:block">Apellido</th>
              <th className="headersTable py-2 px-4">Email</th>
              <th className="headersTable py-2 px-4 hidden md:block">Rol</th>
              <th className="headersTable py-2 "></th>
            </tr>
          </thead>
          <tbody className='bg-[#111928]'>
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray_700 border-b ">
                <td className="bodyTable py-2 px-4 hidden md:block">{user.firstName}</td>
                <td className="bodyTable py-2 px-4 hidden md:block">{user.lastName}</td>
                <td className="bodyTable py-2 px-4 break">{user.email}</td>
                <td className="bodyTable py-2 px-4 capitalize hidden md:block">{translate(user.role)}</td>
                <td className="bodyTable cursor-pointer px-4 md:px-0 py-2" onClick={() => handleSelecetUser(user)}>
                  <CustomImage
                    url='/img/eye.svg'
                    classImg='w-[20px] h-[20px]' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default UsersTable