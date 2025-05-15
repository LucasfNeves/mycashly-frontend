import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Modal } from '@/components/Modal'
import { useNewTransactionModalController } from './useNewTransactionModalController'
import { Controller } from 'react-hook-form'
import { InputSelect } from '@/components/InputSelect'
import { InputCurrency } from '@/components/InputCurrency'
import { DatePickerInput } from '@/components/DatePickerInput'
import { TransactionType } from '@/app/types/transaction-type'

interface NewTransactionModalProps {
  newTransactionModalOpen: boolean
  handleCloseNewTransactionModal: () => void
  transactionType: TransactionType | undefined
}

export function NewTransactionModal({
  newTransactionModalOpen,
  handleCloseNewTransactionModal,
  transactionType,
}: NewTransactionModalProps) {
  const {
    control,
    errors,
    handleFormSubmit,
    register,
    isPendingCreateTransaction,
    closeModal,
    categories,
    isFetchingAllCategories,
  } = useNewTransactionModalController({
    handleCloseNewTransactionModal,
    transactionType,
  })

  return (
    <Modal
      open={newTransactionModalOpen}
      onClose={closeModal}
      title="Nova Transação"
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
                <InputCurrency {...field} error={errors.value?.message} />
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
            defaultValue={new Date()}
            render={({ field }) => (
              <DatePickerInput {...field} error={errors.date?.message} />
            )}
          />
        </div>

        <div className="mt-8 flex w-full justify-center">
          <Button isLoading={isPendingCreateTransaction}>Adicionar</Button>
        </div>
      </form>
    </Modal>
  )
}
