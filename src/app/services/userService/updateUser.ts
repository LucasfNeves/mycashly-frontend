import { httpClient } from '../httpClient'

interface UpdateUserParams {
  name?: string
  email?: string
  password?: string
}

export async function updateUser(params: UpdateUserParams) {
  const { data } = await httpClient.patch('/users', params)

  return data
}
