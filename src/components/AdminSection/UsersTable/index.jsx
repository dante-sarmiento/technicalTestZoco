import React from 'react'

const UsersTable = ({ data }) => {
  console.log("data", data)
  return (
    <div className="overflow-x-auto w-full">
      <h2 className="text-xl text-white font-bold p-1">Lista de Usuarios</h2>
      <div className='w-full p-4 rounded-xl bg-[#4B5563]'>
      <table className="min-w-full border rounded shadow">
        <thead className="border-b bg-[#0E1420]">
          <tr>
            <th className="headersTable py-2 px-4">Nombre</th>
            <th className="headersTable py-2 px-4">Email</th>
            <th className="headersTable py-2 px-4">Rol</th>
            <th className="headersTable py-2 px-4">Dirección</th>
            <th className="headersTable py-2 px-4">Estudios</th>
            <th className="headersTable py-2 "></th>
          </tr>
        </thead>
        <tbody className='bg-[#111928]'>
          {data.map((user) => (
            <tr key={user.id} className="hover:bg-gray-700 border-b ">
              <td className="bodyTable py-2 px-4">
                {user.firstName} {user.lastName}
              </td>
              <td className="bodyTable py-2 px-4">{user.email}</td>
              <td className="bodyTable py-2 px-4 capitalize">{user.role}</td>
              <td className="bodyTable py-2 px-4">{user.data.address}</td>
              <td className="bodyTable py-2 px-4">{user.data.studies}</td>
              <td className="bodyTable cursor-pointer py-2">Ver</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    </div>
  )
}

export default UsersTable