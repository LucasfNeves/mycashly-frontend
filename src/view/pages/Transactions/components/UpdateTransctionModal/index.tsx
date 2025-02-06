import { Button } from '@/view/components/Button'
import { DatePickerInput } from '@/view/components/DatePickerInput'
import { Input } from '@/view/components/Input'
import { InputCurrency } from '@/view/components/InputCurrency'
import { InputSelect } from '@/view/components/InputSelect'
import { Modal } from '@/view/components/Modal'
import { Controller } from 'react-hook-form'
import { useUpdateTransactionModalController } from './useUpdateTransactionModalController'

interface NewTransactionModalProps {
  open: boolean
  onClose: () => void
  transactionId?: string
}

export function UpdateTransactionModal({
  open,
  onClose,
  transactionId,
}: NewTransactionModalProps) {
  const { register, errors, handleFormSubmit, control } =
    useUpdateTransactionModalController(transactionId!)

  return (
    <Modal open={open} onClose={onClose} rigthAction title="Nova Transação">
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
                placeholderColor="dark"
                options={[
                  { value: 'income', label: 'Receita' },
                  { value: 'expense', label: 'Despesa' },
                  { value: 'investment', label: 'Investimento' },
                ]}
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
            className="border-2 border-neutral-200 bg-transparent text-neutral-200"
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
                options={[
                  { value: 'income', label: 'Receita' },
                  { value: 'expense', label: 'Despesa' },
                  { value: 'investment', label: 'Investimento' },
                ]}
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
                value={
                  field.value
                    ? new Date(field.value).toISOString()
                    : new Date().toISOString()
                }
                error={errors.date?.message}
              />
            )}
          />
        </div>

        <div className="mt-8 flex w-full justify-center">
          <Button>Salvar</Button>
        </div>
      </form>
    </Modal>
  )
}
