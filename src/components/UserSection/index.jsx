import React, { useState } from 'react'
import UserDetail from '../AdminSection/UserDetail'

//Context
import { useAuth } from '../../context/AuthProvider';

const UserSection = ({ user }) => {
  const { updateUserContext, setLoader } = useAuth();
  const [selectedUser, setSelectedUser] = useState({ ...user })

  const handleUpdateUser = (updatedUser) => {
    setLoader(true)
    setSelectedUser(updatedUser)
    updateUserContext(updatedUser)
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-start py-2">
      <UserDetail
        role={user.role}
        user={selectedUser}
        updateUser={handleUpdateUser}
        setLoader={setLoader} />
    </div>
  )
}

export default UserSection