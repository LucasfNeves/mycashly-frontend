import { transactions } from '../..'

export function useEditTransactionModalController(transactionId: string) {
  const selectedTransaction = transactions.find(
    (transaction) => transaction.id === transactionId,
  )

  return {
    selectedTransaction,
  }
}
