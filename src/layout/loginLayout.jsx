import React from 'react'

//Context
import { useAuth } from '../context/AuthProvider'

//Components
import Loader from '../components/Loader'

const LoginLayout = ({children}) => {
  const { loader } = useAuth()
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-dark'>
      {loader && (
        <Loader />
      )}
        {children}
    </div>
  )
}

export default LoginLayout