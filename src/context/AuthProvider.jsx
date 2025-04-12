// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [loader, setLoader] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token')
    const storedUser = sessionStorage.getItem('user')
    const storedRole = sessionStorage.getItem('role')

    if (storedToken && storedUser && storedRole) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
      setRole(storedRole)
      setIsAuthenticated(true)
    }
  }, [])

  const loginContext = (token, user) => {
    setToken(token)
    setUser(user)
    setRole(user.role)
    setIsAuthenticated(true)

    sessionStorage.setItem('token', token)
    sessionStorage.setItem('user', JSON.stringify(user))
    sessionStorage.setItem('role', user.role)
  }

  const logoutContext = () => {
    setLoader(true)
    setToken(null)
    setUser(null)
    setRole(null)
    setIsAuthenticated(false)
    setTimeout(() => {
      setLoader(false)
    }, 1000);
    sessionStorage.clear()
  }

  return (
    <AuthContext.Provider
      value={{ token, user, role, isAuthenticated, loginContext, logoutContext, loader, setLoader }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
