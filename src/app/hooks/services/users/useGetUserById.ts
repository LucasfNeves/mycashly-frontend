import { useQuery } from '@tanstack/react-query'
import { getUserById } from '@/app/services/userService/getUserById'

export function useGetUserById() {
  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => getUserById(),
    staleTime: Infinity,
  })

  return {
    getUserData: data,
    getUserIsError: isError,
    getUserIsFetching: isFetching,
    getUserIsSuccess: isSuccess,
  }
}
