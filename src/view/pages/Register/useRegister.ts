import { useAuth } from '@/app/hooks/useAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z
    .string()
    .email('Informe um email válido')
    .min(1, 'E-mail é obrigatório'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 dígitos'),
})

type FormData = z.infer<typeof schema>

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
    resolver: zodResolver(schema),
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
