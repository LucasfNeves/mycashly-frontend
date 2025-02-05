export interface TransactionDetailsProps {
  id: string
  category: string
  name: string
  date: string
  value: number
  type: 'income' | 'investment' | 'expense'
  onClick?: () => void
}
