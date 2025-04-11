import React, { useState } from 'react'

//Components
import UsersTable from './UsersTable'

//Constants
import { USERS } from '../../constants/users'
import ButtonsGrid from '../ButtonsGrid'

const sections = [
    { label: "Usuarios", value: "users" },
    { label: "Nuevo usuario", value: "new" }
]

const AdminSection = ({ admin }) => {
    const [section, setSection] = useState(sections[0])

    const handleData = (data) => {
        setSection(data)
    }
    return (
        <div className='w-full h-full flex flex-col justify-center items-start'>
            <ButtonsGrid
                data={sections}
                dataSelected={section}
                handleData={handleData} />
            {section.value == "users" && (
                <UsersTable
                    data={USERS} />
            )}
        </div>
    )
}

export default AdminSection