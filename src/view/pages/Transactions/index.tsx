import { TransactionProvider } from '@/app/context/TransationContext'
import { TransactionsMain } from './components/TransactionsMain'

export function Transactions() {
  return (
    <TransactionProvider>
      <TransactionsMain />
    </TransactionProvider>
  )
}
