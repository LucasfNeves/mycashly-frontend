import { TransactionType } from '@/app/types/transaction-type'
import { httpClient } from '../httpClient'

export interface updateTransactionParams {
  id: string
  categoryId: string
  name: string
  date: string
  value: number
  type: TransactionType | null
}

export async function updateTransaction({
  id,
  ...params
}: updateTransactionParams) {
  const { data } = await httpClient.patch(`/transactions/${id}`, params)

  return data
}
