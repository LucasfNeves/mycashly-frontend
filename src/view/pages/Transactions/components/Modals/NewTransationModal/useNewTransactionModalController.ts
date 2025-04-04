import { z } from 'zod'
import { newTransactionModalSchema } from '../../../../../../app/schemas/newTransactionModalSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useQueryClient } from '@tanstack/react-query'
import { useCreateTransaction } from '@/app/hooks/services/transactions/useCreateTransaction'
import { useGetAllCategories } from '@/app/hooks/services/categories/useGetAllCategories'

type FormData = z.infer<typeof newTransactionModalSchema>

interface NewTransactionModalController {
  handleCloseNewTransactionModal: () => void
}

export function useNewTransactionModalController({
  handleCloseNewTransactionModal,
}: NewTransactionModalController) {
  const queryClient = useQueryClient()

  const { categories, isFetchingAllCategories } = useGetAllCategories()

  const { isPendingCreateTransaction, createTransactionMutation } =
    useCreateTransaction()

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
      categoryId: '',
      name: '',
      type: undefined,
      value: 0,
    },
  })

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      await createTransactionMutation({
        ...data,
        date: data.date.toISOString(),
      })

      queryClient.invalidateQueries({ queryKey: ['transactions'] })
      queryClient.invalidateQueries({ queryKey: ['users', 'balance'] })
      toast.success('Transação criada com sucesso')
      reset()
      handleCloseNewTransactionModal()
    } catch {
      toast.error('Erro ao criar transação')
    }
  })

  const closeModal = () => {
    handleCloseNewTransactionModal()
    reset()
  }

  return {
    register,
    errors,
    handleFormSubmit,
    control,
    isPendingCreateTransaction,
    createTransactionMutation,
    reset,
    closeModal,
    categories,
    isFetchingAllCategories,
  }
}
