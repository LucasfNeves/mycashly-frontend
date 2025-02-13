import { httpClient } from '../httpClient'

export async function deleteUser() {
  const { data } = await httpClient.delete('/users')

  return data
}
