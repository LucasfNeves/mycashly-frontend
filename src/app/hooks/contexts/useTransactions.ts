import { TransactionContext } from '@/app/context/TransationContext'
import { useContext } from 'react'

export function useTransactions() {
  return useContext(TransactionContext)
}
