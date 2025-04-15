import React, { useState, useEffect } from 'react'

//Components
import UsersTable from './UsersTable'
import CustomImage from '../CustomImage'
import UserDetail from './UserDetail'

//Constants

import { getUsers } from '../../api/users'

//Context
import { useAuth } from '../../context/AuthProvider'
import { useData } from '../../context/DataProvider'
import { addUserArray, updateUserArray } from '../../helpers/handleUsersArray'

const AdminSection = ({ admin }) => {
    const { setLoader, updateUserContext } = useAuth()
    const [usersData, setUsersData] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [isNewUserForm, setIsNewUserForm] = useState(false)
    const { usersProvider, setUsersProvider } = useData()


    useEffect(() => {
        if (usersProvider.length > 0) {
            setUsersData(usersProvider)
            return
        }

        const fetchUsers = async () => {
            try {
                const data = await getUsers()
                setUsersData(data)
            } catch (error) {
                console.error("Error fetching users", error)
            }
        }

        fetchUsers()
    }, [usersProvider])

    const handleUpdateUser = (updatedUser) => {
        setUsersData(prev => updateUserArray(prev, updatedUser))
        setUsersProvider(prev => updateUserArray(prev, updatedUser))
        if (updatedUser.id === admin.id) {
            updateUserContext(updatedUser)
        }
    };

    const handleSelecetUser = (user) => {
        setSelectedUser(user)
    }

    const handleNewUser = () => {
        const newuserData = {
            id: Date.now(),
            userId: Date.now(),
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            password: ''
        };
        setSelectedUser(newuserData)
        setIsNewUserForm(true)
    }

    const submitNewUser = (newUser) => {
        setLoader(true)
        setUsersData(prev => addUserArray(prev, newUser))
        setUsersProvider(prev => addUserArray(prev, newUser))
        setIsNewUserForm(false)
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }


    return (
        <div className='w-full h-full flex flex-col justify-center items-start py-2'>
            {selectedUser ?
                <div className='flex flex-col gap-3 w-full '>
                    <UserDetail
                        role={admin.role}
                        user={selectedUser}
                        updateUser={handleUpdateUser}
                        isNewUserForm={isNewUserForm}
                        submitNewUser={submitNewUser}
                        setLoader={setLoader}
                    />

                    <button className='w-[40px] h-[40px] mobile:mb-10 md:mb-3' onClick={() => {
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