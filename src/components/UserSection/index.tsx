import React from 'react'

const UserSection = ({user}) => {
  return (
    <div>
        Bienvenido {user.firstName} {user.lastName}
    </div>
  )
}

export default UserSection