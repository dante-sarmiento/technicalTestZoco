import React from 'react'

//Components
import Header from '../components/Header'

const MainLayout = ({children}) => {
  return (
    <div className='w-full h-screen bg-[#0E1420]'>
        <Header />
        <div className='w-full px-6 py-2 flex justify-center items-center'>
        {children}
        </div>
    </div>
  )
}

export default MainLayout