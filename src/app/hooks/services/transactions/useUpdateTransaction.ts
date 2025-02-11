import { updateTransaction } from '@/app/services/transactionsService/updateTransaction'
import { useMutation } from '@tanstack/react-query'

export function useUpdateTransaction() {
  const { data, isPending, mutateAsync } = useMutation({
    mutationKey: ['update-transaction'],
    mutationFn: updateTransaction,
  })

  return {
    isPendingUpdateTransaction: isPending,
    updateTransactionMutation: mutateAsync,
    updatedTransaction: data,
  }
}
