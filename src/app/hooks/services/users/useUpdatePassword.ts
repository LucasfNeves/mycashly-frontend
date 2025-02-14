import { updatePassword } from '@/app/services/userService/updatePassword'
import { useMutation } from '@tanstack/react-query'

export function useUpdatePassword() {
  const { data, isPending, mutateAsync } = useMutation({
    mutationKey: ['update-password'],
    mutationFn: updatePassword,
  })

  return {
    isPendingUpdatePassword: isPending,
    updatePasswordMutation: mutateAsync,
    updatedPassword: data,
  }
}
