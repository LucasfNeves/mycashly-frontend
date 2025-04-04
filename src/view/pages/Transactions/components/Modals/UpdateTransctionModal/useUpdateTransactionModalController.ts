'use client'

import { z } from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { updateTransactionSchema } from '@/app/schemas/updateTransactionSchema'
import { toast } from 'react-toastify'
import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { useUpdateTransaction } from '@/app/hooks/services/transactions/useUpdateTransaction'
import { useQueryClient } from '@tanstack/react-query'
import { TransactionType } from '@/app/types/transaction-type'
import { useDeleteTransaction } from '@/app/hooks/services/transactions/useDeleteTransaction'
import { useGetAllCategories } from '@/app/hooks/services/categories/useGetAllCategories'

type FormData = z.infer<typeof updateTransactionSchema>

interface UpdateTransactionModalController {
  handleEditTransationModalClose: () => void
  selectedTransaction: TransactionDetails | null
}

export function useUpdateTransactionModalController({
  handleEditTransationModalClose,
  selectedTransaction,
}: UpdateTransactionModalController) {
  const queryClient = useQueryClient()

  const { categories, isFetchingAllCategories } = useGetAllCategories()

  const {
    isPendingUpdateTransaction,
    updateTransactionMutation,
    updatedTransaction,
  } = useUpdateTransaction()

  const { deleteTransactionMutation, isPendingDeleteTransaction } =
    useDeleteTransaction()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(updateTransactionSchema),
    defaultValues: {
      categoryId: selectedTransaction?.categoryId,
      name: selectedTransaction?.name,
      date: selectedTransaction
        ? new Date(selectedTransaction.date)
        : new Date(),
      type: selectedTransaction?.type?.toUpperCase() as
        | 'INCOME'
        | 'EXPENSE'
        | 'INVESTMENT',
      value: selectedTransaction?.value,
    },
  })

  useEffect(() => {
    if (selectedTransaction) {
      reset({
        categoryId: selectedTransaction?.categoryId,
        name: selectedTransaction?.name,
        date: selectedTransaction
          ? new Date(selectedTransaction.date)
          : new Date(),
        type: selectedTransaction?.type?.toUpperCase() as
          | 'INCOME'
          | 'EXPENSE'
          | 'INVESTMENT',
        value: selectedTransaction?.value,
      })
    }
  }, [selectedTransaction, reset])

  const handleDeleteTransaction = async () => {
    try {
      await deleteTransactionMutation(selectedTransaction!.id)

      handleEditTransationModalClose()
      queryClient.invalidateQueries({ queryKey: ['transactions'] })
      queryClient.invalidateQueries({ queryKey: ['users', 'balance'] })
      toast.success('Transação deletada com sucesso')
      reset()
    } catch {
      toast.error('Erro ao deletar transação')
    }
  }

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      await updateTransactionMutation({
        ...data,
        id: selectedTransaction!.id,
        type: selectedTransaction?.type as TransactionType,
        date: data.date?.toISOString(),
      })

      queryClient.invalidateQueries({ queryKey: ['transactions'] })
      toast.success('Transação editada com sucesso')
      reset()
      handleEditTransationModalClose()
    } catch {
      toast.error('Erro ao editar transação')
    }
  })

  return {
    register,
    errors,
    handleFormSubmit,
    control,
    reset,
    isPendingUpdateTransaction,
    updatedTransaction,
    handleDeleteTransaction,
    isPendingDeleteTransaction,
    isFetchingAllCategories,
    categories,
  }
}
