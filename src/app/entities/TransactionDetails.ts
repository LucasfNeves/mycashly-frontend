export interface TransactionDetails {
  id: string
  category: string
  name: string
  date: string
  value: number
  type: 'income' | 'investment' | 'expense'
}
