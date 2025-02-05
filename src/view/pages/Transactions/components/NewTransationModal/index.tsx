import { Button } from '@/view/components/Button'
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
        <Input
          placeholder="Categoria"
          name="category"
          type="text"
          className="border-2 border-neutral-200 bg-transparent text-neutral-200"
          placeholderColor="dark"
        />

        <InputSelect
          className="border-2 border-neutral-200 bg-transparent text-neutral-200"
          placeholder="Nome"
          placeholderColor="dark"
          options={[
            { value: 'income', label: 'Receita' },
            { value: 'expense', label: 'Despesa' },
            { value: 'investment', label: 'Investimento' },
          ]}
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

        <Button>Adicionar</Button>
      </form>
    </Modal>
  )
}
