import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { useAuth } from '../../../app/hooks/contexts/useAuth'
import { toast } from 'react-toastify'

const schema = z.object({
  email: z
    .string()
    .email('Informe um email válido')
    .min(1, 'E-mail é obrigatório'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 dígitos'),
})

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const { signIn, isPendingSignIn } = useAuth()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const handleFormSubmit = handleSubmit(async ({ email, password }) => {
    try {
      await signIn(email, password)
    } catch {
      toast.error('Credenciais inválidas')
    }
  })

  return {
    handleFormSubmit,
    register,
    errors,
    isPendingSignIn,
  }
}
