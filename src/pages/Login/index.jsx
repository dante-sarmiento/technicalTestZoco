import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { login } from '../../api/mockApi'
import LoginLayout from '../../layout/loginLayout'
import CustomImage from '../../components/CustomImage'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const { loginContext } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      const { token, user } = await login(email, password)
      loginContext(token, user)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }


  return (
    <LoginLayout>
      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={handleSubmit}
          className="px-6 py-8 rounded shadow w-full min-w-sm md:min-w-md max-w-lg space-y-6 bg-white rounded-3xl"
        >
          <h2 className="text-2xl font-semibold text-center">Inicio de sesión</h2>

          <div className='w-full border border-gray-400 px-2 h-16 rounded-2xl flex justify-center items-center'>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-xl"
              required
            />
          </div>
          <div className='w-full border border-gray-400 px-2 h-16 rounded-2xl flex justify-center items-center'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none text-xl"
              required
            />
            <button className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
              <CustomImage
                url={!showPassword ? "/img/closeEye.png" : "/img/openEye.png"}
                alt="pass"
                className="w-[30px] h-[30px]"
                />
            </button>

          </div>
          {error && (
            <p className='text-red-500 text-sm md:text-base font-normal text-start'>
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full text-black bg-green-700 p-2 rounded-2xl hover:bg-blue-700 cursor-pointer text-xl text-white font-semibold transition-all transition-discrete delay-100 duration-400 "
            >
            Entrar
          </button>
        </form>
      </div>
    </LoginLayout>
  )
}

export default Login