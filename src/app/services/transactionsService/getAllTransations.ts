import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { httpClient } from '../httpClient'

type TransactionResponse = Array<TransactionDetails>

type TransacttionsFilters = {
  month: string
  year: string
  type?: TransactionDetails['type']
}

export async function getAllTransactions(filters: TransacttionsFilters) {
  const { data } = await httpClient.get<TransactionResponse>('/transactions', {
    params: filters,
  })

  return data
}
