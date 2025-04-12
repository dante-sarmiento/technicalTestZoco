import React from 'react'

//Components
import Header from '../components/Header'
import Loader from '../components/Loader'

//Context
import { useAuth } from '../context/AuthProvider'

const MainLayout = ({children}) => {
  const { loader } = useAuth()
  return (
    <div className='w-full h-screen bg-dark overflow-auto hiddenScroll'>
      {loader && (
        <Loader />
      )}
        <Header />
        <div className='w-full px-6 py-2 flex justify-center items-center'>
        {children}
        </div>
    </div>
  )
}

export default MainLayout