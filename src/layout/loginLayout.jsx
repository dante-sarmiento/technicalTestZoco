import React from 'react'

const LoginLayout = ({children}) => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-400'>
        {children}
    </div>
  )
}

export default LoginLayout