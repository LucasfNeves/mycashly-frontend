import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { httpClient } from '../httpClient'

type TransactionResponse = Array<TransactionDetails>

export type TransacttionsFilters = {
  month: number
  year: number
  type?: TransactionDetails['type']
}

export async function getAllTransactions(filters: TransacttionsFilters) {
  const { data } = await httpClient.get<TransactionResponse>('/transactions', {
    params: filters,
  })

  return data
}
