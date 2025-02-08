import { httpClient } from '../httpClient'

interface UserResponse {
  id: string
  name: string
  email: string
}

export async function getUserById() {
  const { data } = await httpClient.get<UserResponse>('/users/me')

  return data
}
