import React, { useState, useEffect } from 'react'

//Components
import UsersTable from './UsersTable'
import CustomImage from '../CustomImage'
import UserDetail from './UserDetail'

//Constants

import { getUsers } from '../../api/users'

//Context
import { useAuth } from '../../context/AuthProvider'

const AdminSection = ({ admin }) => {
    const { setLoader, updateUserContext } = useAuth()
    const [usersData, setUsersData] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [isNewUserForm, setIsNewUserForm] = useState(false)


    useEffect(() => {
        const getUsersData = async () => {
            try {
                const data = await getUsers()
                setUsersData(data)
            } catch (error) {
                console.log("getUsers error", error)
            }
        }
        getUsersData()
    }, [])

    const handleUpdateUser = (updatedUser) => {
        
        setLoader(true);
        if (updatedUser.id === admin.id) {
            updateUserContext(updatedUser);
        }
        setUsersData((prev) =>
            prev.map(user =>
                user.id === updatedUser.id ? updatedUser : user
            )
        );
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    };

    const handleSelecetUser = (user) => {
        setSelectedUser(user)
    }

    const handleNewUser = () => {
        const newuserData = {
        id: Date.now(),
        userId: Date.now(),
        street: '',
        number: '',
        city: '',
        state: '',
        country: '',
        password: ''
      };
      setSelectedUser(newuserData)
      setIsNewUserForm(true)
    }

    const submitNewUser = (newUser) => {
        setUsersData(prev => [...prev, newUser])
        setIsNewUserForm(false)
    }


    return (
        <div className='w-full h-full flex flex-col justify-center items-start py-2'>
            {selectedUser ?
                <div className='flex flex-col gap-3 w-full'>
                    <UserDetail
                        role={admin.role}
                        user={selectedUser}
                        updateUser={handleUpdateUser}
                        isNewUserForm={isNewUserForm}
                        submitNewUser={submitNewUser}
                         />

                    <button className='w-[30px] h-[30px]' onClick={() => {
                        setSelectedUser(null) 
                        setIsNewUserForm(false)
                        }}>
                        <CustomImage
                            url='/img/arrow-back.svg'
                            classImg='w-full h-full p-2 bg-red_700 rounded-lg'
                            alt='arrow'
                        />
                    </button>
                </div>
                :
                <UsersTable
                    data={usersData}
                    handleSelecetUser={handleSelecetUser}
                    handleNewUSer={handleNewUser} />
            }
        </div>
    )
}

export default AdminSection