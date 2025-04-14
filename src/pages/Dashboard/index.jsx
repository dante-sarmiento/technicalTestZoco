import React from 'react'

//Context
import { useAuth } from '../../context/AuthProvider'

//Layout
import MainLayout from '../../layout/mainLayout'
import UserSection from '../../components/UserSection'
import AdminSection from '../../components/AdminSection'


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