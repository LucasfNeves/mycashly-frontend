import { z } from 'zod'
import { newTransactionModalSchema } from './../../../../../app/schemas/newTransactionModalSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useGetAllCategories } from '@/app/hooks/services/useGetAllCategories'
import { createTransaction } from '@/app/services/transactionsService/createTransaction'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type FormData = z.infer<typeof newTransactionModalSchema>

interface NewTransactionModalController {
  onClose: () => void
}

export function useNewTransactionModalController({
  onClose,
}: NewTransactionModalController) {
  const queryClient = useQueryClient()

  const { categories, isFetchingAllCategories } = useGetAllCategories()

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newTransactionModalSchema),
    defaultValues: {
      date: new Date(),
    },
  })

  const {
    isPending: isPendingCreateTransaction,
    mutateAsync: createTransactionMutation,
  } = useMutation({
    mutationKey: ['create-transaction'],
    mutationFn: createTransaction,
  })

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      await createTransactionMutation({
        ...data,
        value: Number(data.value),
        date: data.date.toISOString(),
        type: data.type,
        id: data.categoryId,
      })

      queryClient.invalidateQueries({ queryKey: ['transactions'] })
      toast.success('Transação criada com sucesso')
      onClose()
      reset()
    } catch {
      toast.error('Erro ao criar transação')
    }
  })

  return {
    register,
    errors,
    handleFormSubmit,
    control,
    categories,
    isFetchingAllCategories,
    isPendingCreateTransaction,
    createTransactionMutation,
  }
}
