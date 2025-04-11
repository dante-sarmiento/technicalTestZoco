import React from 'react'

//Context
import { useAuth } from '../../context/AuthContext'

//Layout
import MainLayout from '../../layout/mainLayout'
import AdminSection from '../../components/AdminSection'
import UserSection from '../../components/UserSection'


const Dashboard = () => {
  const { user } = useAuth()

  return (
    <MainLayout>
      {user?.role === 'admin' ? (
        <AdminSection
          admin={user} />
      ) : (
        <UserSection
          user={user} />
      )}
    </MainLayout>
  )
}

export default Dashboard