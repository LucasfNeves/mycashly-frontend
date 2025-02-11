import { httpClient } from '../httpClient'

export async function deleteTransaction(transactionId: string) {
  const { data } = await httpClient.delete(`/transactions/${transactionId}`)

  return data
}
