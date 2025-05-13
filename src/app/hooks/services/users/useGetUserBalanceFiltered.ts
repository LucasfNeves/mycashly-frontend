import {
  getUserBalanceFiltered,
  TransacttionsFilters,
} from '@/app/services/userService/getUserBalanceFiltered'
import { useQuery } from '@tanstack/react-query'

export function useGetUserBalanceFiltered(filters: TransacttionsFilters) {
  const { isError, data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ['users', 'balance-filtered'],
    queryFn: async () =>
      getUserBalanceFiltered({
        month: filters.month,
        year: filters.year,
      }),
  })

  return {
    getBalanceDataFiltered: data,
    getBalanceIsError: isError,
    getBalanceIsFetching: isFetching,
    getBalanceIsLoading: isLoading,
    getBalanceFilteredRefetch: refetch,
  }
}
