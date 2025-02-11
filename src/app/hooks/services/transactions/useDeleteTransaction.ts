import { deleteTransaction } from '@/app/services/transactionsService/deleteTransaction'
import { useMutation } from '@tanstack/react-query'

export function useDeleteTransaction() {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['delete-transaction'],
    mutationFn: deleteTransaction,
  })

  return {
    isPendingDeleteTransaction: isPending,
    deleteTransactionMutation: mutateAsync,
  }
}
