import { getUserBalance } from '@/app/services/userService/getUserBalance'
import { useQuery } from '@tanstack/react-query'

export function useGetUserBalance(signedIn: boolean) {
  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: ['users', 'balance'],
    queryFn: async () => getUserBalance(),
    enabled: signedIn,
    staleTime: Infinity,
  })

  return {
    data,
    isError,
    isFetching,
    isSuccess,
  }
}
