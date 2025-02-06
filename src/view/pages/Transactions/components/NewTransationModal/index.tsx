import { Button } from '@/view/components/Button'
import { Input } from '@/view/components/Input'
import { Modal } from '@/view/components/Modal'
import { useNewTransactionModalController } from './useNewTransactionModalController'
import { Controller } from 'react-hook-form'
import { InputSelect } from '@/view/components/InputSelect'
import { InputCurrency } from '@/view/components/InputCurrency'
import { DatePickerInput } from '@/view/components/DatePickerInput'

interface NewTransactionModalProps {
  open: boolean
  onClose: () => void
}

export function NewTransactionModal({
  open,
  onClose,
}: NewTransactionModalProps) {
  const { control, errors, handleFormSubmit, register } =
    useNewTransactionModalController()

  return (
    <Modal open={open} onClose={onClose} title="Nova Transação">
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
                placeholderColor="dark"
                options={[
                  { value: 'income', label: 'Receita' },
                  { value: 'expense', label: 'Despesa' },
                  { value: 'investment', label: 'Investimento' },
                ]}
                {...field}
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
                error={errors.type?.message}
              />
            )}
          />

          <Controller
            name="date"
            control={control}
            defaultValue={new Date().toISOString()}
            render={({ field }) => (
              <DatePickerInput {...field} error={errors.date?.message} />
            )}
          />
        </div>

        <div className="mt-8 flex w-full justify-center">
          <Button>Adicionar</Button>
        </div>
      </form>
    </Modal>
  )
}
