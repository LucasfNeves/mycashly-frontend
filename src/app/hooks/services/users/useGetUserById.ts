import { useQuery } from '@tanstack/react-query'
import { getUserById } from '@/app/services/userService/getUserById'

export function useGetUserById(signedIn: boolean) {
  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => getUserById(),
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
