'use client'

import { z } from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useMemo } from 'react'
import { updateTransactionSchema } from '@/app/schemas/updateTransactionSchema'
import { toast } from 'react-toastify'
import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { useTransactions } from '@/app/hooks/contexts/useTransactions'

type FormData = z.infer<typeof updateTransactionSchema>

export function useUpdateTransactionModalController(
  selectedTransaction: TransactionDetails | null,
) {
  const { categories, isFetchingAllCategories } = useTransactions()

  const categoryId = selectedTransaction?.categoryId

  const category = useMemo(() => {
    return categories?.find((category) => category.id === categoryId)
  }, [categories, categoryId])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(updateTransactionSchema),
    defaultValues: {
      category: category?.id,
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
        category: category?.id,
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
    try {
      console.log(data)
      toast.success('Transação atualizada com sucesso')
    } catch {
      toast.error('Erro ao atualizar transação')
    }
  })

  return {
    register,
    errors,
    handleFormSubmit,
    control,
    isFetchingAllCategories,
    categories,
    reset,
  }
}
