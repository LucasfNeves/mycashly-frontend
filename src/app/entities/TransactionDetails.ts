import { TransactionType } from '../types/transaction-type'

export interface TransactionDetails {
  id: string
  categoryId: string
  name: string
  date: Date
  value: number
  type: TransactionType | null
}
