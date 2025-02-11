import { z } from 'zod'
import validator from 'validator'

export const updateTransactionSchema = z.object({
  categoryId: z.string().uuid({
    message: 'Category ID must be a valid UUID',
  }),
  name: z.string().trim().min(1, {
    message: 'Nome é obrigatório.',
  }),
  date: z.date({
    required_error: 'A data é obrigatória.',
  }),
  type: z.enum(['INCOME', 'EXPENSE', 'INVESTMENT'], {
    errorMap: () => ({
      message: 'Tipo inválido.',
    }),
  }),
  value: z
    .number()
    .min(1, {
      message: 'Valor é obrigatório.',
    })
    .refine(
      (value) =>
        validator.isDecimal(value.toString(), { decimal_digits: '0,2' }),
      {
        message: 'Use até duas casas decimais.',
      },
    ),
})
