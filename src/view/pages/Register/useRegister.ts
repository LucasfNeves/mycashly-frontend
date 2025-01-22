import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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

export function useRegisterController() {
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
