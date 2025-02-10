import { Button } from '@/view/components/Button'
import { SliderMonths } from '@/view/components/SliderMonths'
import { PlusCircleIcon } from 'lucide-react'
import { NewTransactionModal } from './components/NewTransationModal'
import { useTransactionController } from './useTransactionController'
import { TransactionItem } from './components/TransactionDetails'
import { transactionsMocked } from '@/app/config/constants'
import { UpdateTransactionModal } from './components/UpdateTransctionModal'

export function Transactions() {
  const {
    handleCloseNewTransactionModal,
    handleOpenNewTransactionModal,
    handleEditTransationModalOpen,
    handleEditTransationModalClose,
    newTransactionModalOpen,
    editTransactionModalOpen,
    selectedTransaction,
  } = useTransactionController()

  return (
    <div className="flex min-h-screen flex-col gap-8 lg:gap-16">
      <header className="flex flex-col items-center justify-between gap-8 lg:gap-16">
        <div className="flex w-full items-center justify-end">
          <Button
            onClick={handleOpenNewTransactionModal}
            className="flex w-fit gap-2 px-6"
          >
            Adicionar Transação <PlusCircleIcon />
          </Button>
        </div>

        <div className="z-0 w-full">
          <SliderMonths />
        </div>
      </header>

      <section className="flex flex-col gap-8">
        <header className="flex items-center justify-between gap-4">
          <h1 className="text:base text-neutral-300 lg:text-xl">Transações</h1>
        </header>
        <main className="flex w-full flex-col items-start justify-start gap-4 rounded-md bg-darkBlue-700 p-4">
          {transactionsMocked.map((transaction) => (
            <TransactionItem
              onClick={() => handleEditTransationModalOpen(transaction)}
              key={transaction.id}
              name={transaction.name}
              category={transaction.category}
              date={transaction.date}
              type={transaction.type}
              value={transaction.value}
              id={transaction.id}
            />
          ))}
        </main>
      </section>

      <NewTransactionModal
        open={newTransactionModalOpen}
        onClose={handleCloseNewTransactionModal}
      />
      <UpdateTransactionModal
        transactionId={selectedTransaction?.id}
        open={editTransactionModalOpen}
        onClose={handleEditTransationModalClose}
      />
    </div>
  )
}
