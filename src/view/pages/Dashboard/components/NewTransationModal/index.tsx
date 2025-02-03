import { Input } from '@/view/components/Input'
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
      <form className="flex w-full flex-col gap-4" action="">
        <Input placeholder="Categoria" name="category" type="text" />

        <InputSelect
          placeholder="Teste"
          options={[
            { value: 'income', label: 'Receita' },
            { value: 'expense', label: 'Despesa' },
            { value: 'investment', label: 'Investimento' },
          ]}
        />
      </form>
    </Modal>
  )
}
