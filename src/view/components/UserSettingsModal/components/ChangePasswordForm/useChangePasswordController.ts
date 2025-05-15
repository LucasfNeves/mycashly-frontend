import { useUpdatePassword } from '@/app/hooks/services/users/useUpdatePassword'
import { changePasswordSchema } from '@/app/schemas/updateUserSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

type FormData = z.infer<typeof changePasswordSchema>

interface UseChangePasswordControllerProps {
  onClose: () => void
}

export function useChangePasswordController({
  onClose,
}: UseChangePasswordControllerProps) {
  const { isPendingUpdatePassword, updatePasswordMutation } =
    useUpdatePassword()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(changePasswordSchema),
  })

  const handleFormSubmit = handleSubmit(async (data: FormData) => {
    try {
      await updatePasswordMutation(data)
      onClose()
      toast.success('Senha atualizada com sucesso')
    } catch {
      toast.error('Erro ao atualizar senha')
    }
  })

  return {
    register,
    handleFormSubmit,
    errors,
    isPendingUpdatePassword,
  }
}
