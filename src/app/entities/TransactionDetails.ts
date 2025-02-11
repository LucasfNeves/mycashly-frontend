import { TransactionType } from '../types/transaction-type'

export interface TransactionDetails {
  id: string
  categoryId: string
  name: string
  date: string
  value: number
  type: TransactionType
}
