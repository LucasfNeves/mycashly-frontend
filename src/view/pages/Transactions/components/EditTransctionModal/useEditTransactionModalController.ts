import { z } from 'zod'
import validator from 'validator'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { transactionsMocked } from '@/app/config/constants'

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
        message: 'Name must not be empty.',
      })
      .optional(),
    date: z
      .string()
      .datetime({
        message: 'Date must be a valid date.',
      })
      .optional(),
    type: z
      .enum(['INCOME', 'EXPENSE', 'INVESTMENT'], {
        errorMap: () => ({
          message: 'Type must be INCOME, EXPENSE, or INVESTMENT.',
        }),
      })
      .optional(),
    value: z
      .number()
      .min(1, {
        message: 'Amount must be greater than 0.',
      })
      .refine(
        (value) =>
          validator.isCurrency(value.toFixed(2), {
            digits_after_decimal: [2],
            allow_negatives: false,
            decimal_separator: '.',
          }),
        {
          message:
            'Amount must be a valid currency format with 2 decimal places.',
        },
      )
      .optional(),
  })
  .strict({
    message: 'Some provided field is not allowed.',
  })

type FormData = z.infer<typeof updateTransactionSchema>

export function useEditTransactionModalController(transactionId: string) {
  const selectedTransaction = transactionsMocked.find(
    (transaction) => transaction.id === transactionId,
  )

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(updateTransactionSchema),
    defaultValues: {
      categoryId: selectedTransaction?.category,
      name: selectedTransaction?.name,
      date: selectedTransaction?.date,
      type: selectedTransaction?.type?.toUpperCase() as
        | 'INCOME'
        | 'EXPENSE'
        | 'INVESTMENT',
      value: selectedTransaction?.value,
    },
  })

  // Atualiza o formulário com os novos dados sempre que selectedTransaction mudar
  useEffect(() => {
    if (selectedTransaction) {
      reset({
        categoryId: selectedTransaction.category,
        name: selectedTransaction.name,
        date: selectedTransaction.date,
        type: selectedTransaction.type?.toUpperCase() as
          | 'INCOME'
          | 'EXPENSE'
          | 'INVESTMENT',
        value: selectedTransaction.value,
      })
    }
  }, [selectedTransaction, reset])

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return {
    selectedTransaction,
    register,
    errors,
    handleFormSubmit,
    control,
  }
}
