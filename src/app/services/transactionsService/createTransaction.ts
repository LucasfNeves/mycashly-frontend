import { httpClient } from '../httpClient'

interface CreateTransationParams {
  id: string
  categoryId: string
  name: string
  value: number
  date: string
  type: 'INCOME' | 'EXPENSE' | 'INVESTMENT'
}

export async function createTransaction(params: CreateTransationParams) {
  const { data } = await httpClient.post('/transactions', params)

  return data
}
