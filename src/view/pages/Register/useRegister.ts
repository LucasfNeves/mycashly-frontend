import { useAuth } from '@/app/hooks/contexts/useAuth'
import { createUserSchema } from '@/app/schemas/createUserSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

type FormData = z.infer<typeof createUserSchema>

interface RegisterParams {
  name: string
  email: string
  password: string
}

export function useRegisterController() {
  const { signUp, isPendingSignUp } = useAuth()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createUserSchema),
  })

  const handleFormSubmit = handleSubmit(
    async ({ email, password, name }: RegisterParams) => {
      try {
        await signUp(email, password, name)
      } catch {
        toast.error('Erro ao criar conta')
      }
    },
  )

  return {
    handleFormSubmit,
    register,
    errors,
    isPendingSignUp,
  }
}
