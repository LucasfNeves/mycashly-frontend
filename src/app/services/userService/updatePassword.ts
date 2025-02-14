import { httpClient } from '../httpClient'

interface UpdatePasswordParams {
  currentPassword: string
  newPassword: string
}

export async function updatePassword(params: UpdatePasswordParams) {
  const { data } = await httpClient.patch('/users/password', params)

  return data
}
