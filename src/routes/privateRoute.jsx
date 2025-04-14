import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import Loader from '../components/Loader'

const PrivateRoute = () => {
  const { isAuthenticated, checkingAuth  } = useAuth()

  if(checkingAuth) {
    return <Loader />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
