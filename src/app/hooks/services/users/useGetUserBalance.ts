import { getUserBalance } from '@/app/services/userService/getUserBalance'
import { useQuery } from '@tanstack/react-query'

export function useGetUserBalance() {
  const { isError, data, isFetching, isLoading } = useQuery({
    queryKey: ['users', 'balance'],
    queryFn: async () => getUserBalance(),
  })

  return {
    getBalanceData: data,
    getBalanceIsError: isError,
    getBalanceIsFetching: isFetching,
    getBalanceIsLoading: isLoading,
  }
}
