import { getUserBalance } from '@/app/services/userService/getUserBalance'
import { useQuery } from '@tanstack/react-query'

export function useGetUserBalance() {
  const { isError, data } = useQuery({
    queryKey: ['users', 'balance'],
    queryFn: async () => getUserBalance(),
  })

  return {
    data,
    isError,
  }
}
