import {
  getTopFiveExpenses,
  TopFiveExpensesFilters,
} from '@/app/services/transactionsService/getTopFiveExpenses'
import { useQuery } from '@tanstack/react-query'

export function useGetTopFiveExpenses(filters: TopFiveExpensesFilters) {
  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ['top-five-expenses'],
    queryFn: () =>
      getTopFiveExpenses({
        month: filters.month,
        year: filters.year,
      }),
  })

  return {
    topFiveExpenses: data ?? [],
    isFetchingTopFiveExpenses: isFetching,
    isInitialLoadingTopFiveExpenses: isLoading,
    refetchTopFiveExpenses: refetch,
  }
}
