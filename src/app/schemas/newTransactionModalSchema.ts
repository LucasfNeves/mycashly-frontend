import { z } from 'zod'
import validator from 'validator'

export const newTransactionModalSchema = z.object({
  categoryId: z.string({
    required_error: 'A categoria é obrigatória.',
  }),
  // .uuid({
  //   message: 'A categoria deve ser um UUID válido.',
  // }),
  name: z
    .string({
      required_error: 'Nome é obrigatório.',
    })
    .trim()
    .min(1, {
      message: 'Nome é obrigatório.',
    }),
  date: z
    .string({
      required_error: 'A data é obrigatória.',
    })
    .datetime({
      message: 'Data inválida.',
    }),
  type: z.enum(['INCOME', 'EXPENSE', 'INVESTMENT'], {
    errorMap: () => ({
      message: 'Tipo inválido.',
    }),
  }),
  value: z
    .number({
      required_error: 'O valor é obrigatório.',
      invalid_type_error: 'O valor deve ser um número.',
    })
    .min(1, {
      message: 'O valor é obrigatório.',
    })
    .refine(
      (value) =>
        validator.isDecimal(value.toString(), { decimal_digits: '0,2' }),
      {
        message: 'Use até duas casas decimais.',
      },
    ),
})
