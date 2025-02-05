import { Button } from '@/view/components/Button'
import { DatePickerInput } from '@/view/components/DatePickerInput'
import { Input } from '@/view/components/Input'
import { InputCurrency } from '@/view/components/InputCurrency'
import { InputSelect } from '@/view/components/InputSelect'
import { Modal } from '@/view/components/Modal'

interface NewTransactionModalProps {
  open: boolean
  onClose: () => void
}

export function NewTransactionModal({
  open,
  onClose,
}: NewTransactionModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Nova Transação">
      <form>
        <div className="flex flex-col items-center gap-2">
          <span className="w-full text-base font-medium tracking-[-0.5px] text-neutral-200">
            Valor da transação
          </span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg font-medium tracking-[-0.5px] text-neutral-300">
              R$
            </span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <InputSelect
            className="border-2 border-neutral-200 bg-transparent text-neutral-200"
            placeholder="Categoria"
            placeholderColor="dark"
            options={[
              { value: 'income', label: 'Receita' },
              { value: 'expense', label: 'Despesa' },
              { value: 'investment', label: 'Investimento' },
            ]}
          />

          <Input
            maxLength={20}
            placeholder="Nome"
            name="name"
            type="text"
            className="border-2 border-neutral-200 bg-transparent text-neutral-200"
            placeholderColor="dark"
          />

          <InputSelect
            className="border-2 border-neutral-200 bg-transparent text-neutral-200"
            placeholder="Tipo"
            placeholderColor="dark"
            options={[
              { value: 'income', label: 'Receita' },
              { value: 'expense', label: 'Despesa' },
              { value: 'investment', label: 'Investimento' },
            ]}
          />

          <DatePickerInput />
        </div>

        <div className="mt-8 flex w-full justify-center">
          <Button>Adicionar</Button>
        </div>
      </form>
    </Modal>
  )
}
