import { getAllTransactions } from '@/app/services/transactionsService/getAllTransations'
import { useQuery } from '@tanstack/react-query'

export function useGetAllTransactions() {
  const { data } = useQuery({
    queryKey: ['transactions'],
    queryFn: () =>
      getAllTransactions({
        month: '01',
        year: '2025',
      }),
  })

  return {
    transactions: data ?? [],
  }
}
