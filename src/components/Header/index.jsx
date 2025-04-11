import React from 'react'

//Context
import { useAuth } from '../../context/AuthContext'

//Component
import ButtonText from '../ButtonText'
import CustomImage from '../CustomImage'

const Header = () => {
    const { logoutContext, user } = useAuth()


    return (
        <div className='w-full h-16 flex justify-center items-center px-6 py-2 bg-[#1F2A37]'>
            <div className='w-full flex h-full items-center justify-between'>
                <div className='flex justify-start items-center gap-2'>
                    <div className='border-2 bg-gray-400 rounded-full p-1'>
                    <CustomImage 
                      url='/img/user.png'/>
                      </div>
                <h2 className='text-white'>Bienvenid@, {user?.firstName} {user?.lastName}</h2>
                </div>
                <ButtonText
                    text=''
                    classButton='bg-red-700 hover:bg-gray-900 transition-all transition-discrete delay-100 duration-400 text-white rounded-xl flex justify-center items-center p-2'
                    handleClick={logoutContext}
                    img='/img/logout.png' />

            </div>
        </div>
    )
}

export default Header