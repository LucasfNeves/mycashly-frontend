import { Button } from '@/components/Button'
import { DatePickerInput } from '@/components/DatePickerInput'
import { Input } from '@/components/Input'
import { InputCurrency } from '@/components/InputCurrency'
import { InputSelect } from '@/components/InputSelect'
import { Modal } from '@/components/Modal'
import { Controller } from 'react-hook-form'
import { useUpdateTransactionModalController } from './useUpdateTransactionModalController'
import { Trash2Icon } from 'lucide-react'
import { TransactionDetails } from '@/app/entities/TransactionDetails'

interface UpdateTransactionModalProps {
  editTransactionModalOpen: boolean
  handleEditTransationModalClose: () => void
  selectedTransaction: TransactionDetails | null
}

export function UpdateTransactionModal({
  editTransactionModalOpen,
  handleEditTransationModalClose,
  selectedTransaction,
}: UpdateTransactionModalProps) {
  const {
    register,
    errors,
    handleFormSubmit,
    control,
    isPendingUpdateTransaction,
    isPendingDeleteTransaction,
    handleDeleteTransaction,
    categories,
    isFetchingAllCategories,
  } = useUpdateTransactionModalController({
    selectedTransaction,
    handleEditTransationModalClose,
  })

  return (
    <Modal
      open={editTransactionModalOpen}
      onClose={handleEditTransationModalClose}
      rigthAction={{
        handleAction: handleDeleteTransaction,
        triggerIcon: <Trash2Icon className="h-6 w-6" />,
        actionText: 'Deletar transação',
        description:
          'Esta ação não pode ser desfeita. Isso excluirá permanentemente sua transação.',
        title: 'Tem certeza que deseja deletar esta transação?',
        isLoading: isPendingDeleteTransaction,
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col items-center gap-2">
          <span className="w-full text-base font-medium tracking-[-0.5px] text-neutral-200">
            Valor da transação
          </span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg font-medium tracking-[-0.5px] text-neutral-300">
              R$
            </span>

            <Controller
              name="value"
              control={control}
              render={({ field }) => (
                <InputCurrency
                  {...field}
                  value={field.value || 0}
                  onChange={(value) => field.onChange(value)}
                  error={errors.value?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <InputSelect
                className="border-2 border-neutral-200 bg-transparent text-neutral-200"
                placeholder="Categoria"
                isLoading={isFetchingAllCategories}
                placeholderColor="dark"
                options={categories.map((category) => ({
                  label: category.name,
                  value: category.id,
                }))}
                {...field}
                value={field.value || ''}
                error={errors.categoryId?.message}
              />
            )}
          />

          <Input
            maxLength={20}
            placeholder="Nome"
            type="text"
            placeholderColor="dark"
            {...register('name')}
            error={errors.name?.message}
          />

          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePickerInput
                {...field}
                value={field.value ? new Date(field.value) : new Date()}
                error={errors.date?.message}
              />
            )}
          />
        </div>

        <div className="mt-8 flex w-full justify-center">
          <Button isLoading={isPendingUpdateTransaction}>Salvar</Button>
        </div>
      </form>
    </Modal>
  )
}
