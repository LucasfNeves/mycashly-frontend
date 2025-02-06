import { z } from 'zod'
import validator from 'validator'

export const updateTransactionSchema = z
  .object({
    categoryId: z
      .string()
      // .uuid({
      //   message: 'Category ID must be a valid UUID',
      // })
      .optional(),
    name: z
      .string()
      .trim()
      .min(1, {
        message: 'Nome é obrigatório.',
      })
      .optional(),
    date: z
      .string()
      .datetime({
        message: 'Data inválida.',
      })
      .optional(),
    type: z
      .enum(['INCOME', 'EXPENSE', 'INVESTMENT'], {
        errorMap: () => ({
          message: 'Tipo inválido.',
        }),
      })
      .optional(),
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
      )
      .optional(),
  })
  .strict({
    message: 'Some provided field is not allowed.',
  })
