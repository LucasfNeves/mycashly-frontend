import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z
    .string()
    .email('Informe um email válido')
    .min(1, 'E-mail é obrigatório'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 dígitos'),
})
