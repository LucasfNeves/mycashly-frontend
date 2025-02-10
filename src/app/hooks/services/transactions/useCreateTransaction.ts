import { createTransaction } from '@/app/services/transactionsService/createTransaction'
import { useMutation } from '@tanstack/react-query'

export function useCreateTransaction() {
  const {
    isPending: isPendingCreateTransaction,
    mutateAsync: createTransactionMutation,
  } = useMutation({
    mutationKey: ['create-transaction'],
    mutationFn: createTransaction,
  })

  return {
    isPendingCreateTransaction,
    createTransactionMutation,
  }
}
