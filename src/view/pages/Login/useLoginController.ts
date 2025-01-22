import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

const schema = z.object({
  email: z
    .string()
    .email('Informe um email válido')
    .min(1, 'E-mail é obrigatório'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 dígitos'),
})

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const handleFormSubmit = handleSubmit(async (data) => {
    console.log(data)
  })

  return {
    handleFormSubmit,
    register,
    errors,
  }
}
