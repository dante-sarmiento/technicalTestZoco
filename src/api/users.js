import { USERS } from "../constants/users"


export const getUsers = async () => {
  // const response = await fetch('/api/users') // Simulamos estructura de peticion a API
  if (!USERS) {
    throw new Error('Error al obtener usuarios')
  }
  return USERS
}
