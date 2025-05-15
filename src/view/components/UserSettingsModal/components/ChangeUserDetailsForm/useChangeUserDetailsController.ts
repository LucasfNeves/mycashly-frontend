import { changeUserDetailsSchema } from '@/app/schemas/updateUserSchemas'
import { User } from '@/app/entities/User'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useUpdateUser } from '@/app/hooks/services/users/useUpdateUser'
import { toast } from 'react-toastify'
import { useQueryClient } from '@tanstack/react-query'

interface UseChangeUserDetailsController {
  userDetails?: User
  onClose: () => void
}

type FormData = z.infer<typeof changeUserDetailsSchema>

export function useChangeUserDetailsController({
  userDetails,
  onClose,
}: UseChangeUserDetailsController) {
  const queryClient = useQueryClient()

  const { isPendingUpdateUser, updateUserMutation, updatedUser } =
    useUpdateUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(changeUserDetailsSchema),
    defaultValues: {
      name: userDetails?.name,
      email: userDetails?.email,
    },
  })

  const handleFormSubmit = handleSubmit(async (data: FormData) => {
    try {
      await updateUserMutation(data)
      queryClient.invalidateQueries({ queryKey: ['users', 'me'] })
      toast.success('Usuário atualizado com sucesso!')
      onClose()
    } catch {
      toast.error('Erro ao atualizar usuário')
    }
  })

  return {
    register,
    handleFormSubmit,
    errors,
    isPendingUpdateUser,
    updatedUser,
  }
}
