import { updateUser } from '@/app/services/userService/updateUser'
import { useMutation } from '@tanstack/react-query'

export function useUpdateUser() {
  const { data, isPending, mutateAsync } = useMutation({
    mutationKey: ['update-user'],
    mutationFn: updateUser,
  })

  return {
    isPendingUpdateUser: isPending,
    updateUserMutation: mutateAsync,
    updatedUser: data,
  }
}
