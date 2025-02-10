import { httpClient } from '../httpClient'

export async function createTransation(transation: string) {
  const { data } = await httpClient.post('/transations', transation)

  return data
}
