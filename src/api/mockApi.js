import { USERS } from "../constants/users"


export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find(
        (u) => u.email === email && u.password === password
      )

      if (user) {
        const token = btoa(`${user.email}:${user.role}`)
        resolve({ token, user })
      } else {
        reject(new Error('Credenciales inválidas'))
      }
    }, 1000)
  })
}