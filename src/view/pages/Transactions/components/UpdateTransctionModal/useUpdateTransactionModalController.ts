import { z } from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { transactionsMocked } from '@/app/config/constants'
import { updateTransactionSchema } from '@/app/schemas/updateTransactionSchema'

type FormData = z.infer<typeof updateTransactionSchema>

export function useUpdateTransactionModalController(transactionId: string) {
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
