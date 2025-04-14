import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) return <Navigate to="/" />

  return <Outlet />
}

export default PrivateRoute
