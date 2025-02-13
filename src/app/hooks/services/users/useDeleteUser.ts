import { deleteUser } from '@/app/services/userService/deleteUser'
import { useMutation } from '@tanstack/react-query'

export function useDeleteUser() {
  const { data, isPending, isError, mutateAsync } = useMutation({
    mutationKey: ['delete-user'],
    mutationFn: deleteUser,
  })

  return {
    isPendingDeleteUser: isPending,
    deleteUserMutation: mutateAsync,
    deletedUser: data,
    isDeleteUserError: isError,
  }
}
