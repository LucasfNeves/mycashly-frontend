import {
  getAllTransactions,
  TransacttionsFilters,
} from '@/app/services/transactionsService/getAllTransations'
import { useQuery } from '@tanstack/react-query'

export function useGetAllTransactions(filters: TransacttionsFilters) {
  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ['transactions'],
    queryFn: () =>
      getAllTransactions({
        month: filters.month,
        year: filters.year,
      }),
  })

  return {
    transactions: data ?? [],
    isLoadingTransactions: isFetching,
    isInitialLoadingTransactions: isLoading,
    refetchTransactions: refetch,
  }
}
