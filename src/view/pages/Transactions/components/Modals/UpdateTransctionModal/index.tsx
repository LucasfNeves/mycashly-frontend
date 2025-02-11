import { Button } from '@/view/components/Button'
import { DatePickerInput } from '@/view/components/DatePickerInput'
import { Input } from '@/view/components/Input'
import { InputCurrency } from '@/view/components/InputCurrency'
import { InputSelect } from '@/view/components/InputSelect'
import { Modal } from '@/view/components/Modal'
import { Controller } from 'react-hook-form'
import { useUpdateTransactionModalController } from './useUpdateTransactionModalController'
import { TYPES } from '@/app/config/constants'
import { Trash2Icon } from 'lucide-react'
import { useTransactions } from '@/app/hooks/contexts/useTransactions'

export function UpdateTransactionModal() {
  const {
    handleEditTransationModalClose,
    editTransactionModalOpen,
    selectedTransaction,
  } = useTransactions()

  const {
    register,
    errors,
    handleFormSubmit,
    control,
    isPendingUpdateTransaction,
    isPendingDeleteTransaction,
    handleDeleteTransaction,
  } = useUpdateTransactionModalController({
    selectedTransaction,
    handleEditTransationModalClose,
  })

  const { categories, isFetchingAllCategories } = useTransactions()

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
      title="Editar Transação"
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
            name="type"
            control={control}
            render={({ field }) => (
              <InputSelect
                className="border-2 border-neutral-200 bg-transparent text-neutral-200"
                placeholder="Tipo"
                placeholderColor="dark"
                options={TYPES}
                {...field}
                value={field.value || ''}
                error={errors.type?.message}
              />
            )}
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
