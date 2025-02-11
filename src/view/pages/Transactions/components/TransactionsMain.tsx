import { Button } from '@/view/components/Button'
import { SliderMonths } from '@/view/components/SliderMonths'
import { PlusCircleIcon } from 'lucide-react'
import { TransactionItem } from './TransactionDetails'
import { NewTransactionModal } from './Modals/NewTransationModal'
import { UpdateTransactionModal } from './Modals/UpdateTransctionModal'
import { useTransactions } from '@/app/hooks/contexts/useTransactions'
import { Spinner } from '@/view/components/Spinner'
import EmptyStateIlustrator from '@/view/assets/images/empty-state.svg'

export function TransactionsMain() {
  const {
    handleOpenNewTransactionModal,
    handleEditTransationModalOpen,
    selectedTransaction,
    isLoadingTransactions,
    isInitialLoadingTransactions,
    transactions,
  } = useTransactions()

  const hasTransactions = transactions.length > 0

  return (
    <>
      {!hasTransactions && isInitialLoadingTransactions ? (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-8 w-8" />
        </div>
      ) : (
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
              <h1 className="text:base text-neutral-300 lg:text-xl">
                Transações
              </h1>
            </header>
            <main className="flex w-full flex-col items-start justify-start gap-4 rounded-md bg-darkBlue-700 p-4">
              {!hasTransactions && (
                <div className="flex w-full flex-col items-center justify-center gap-4 p-4">
                  <figure>
                    <img
                      src={EmptyStateIlustrator}
                      alt=" Nenhuma transação encontrada"
                      className="h-64"
                    />
                  </figure>
                  <span className="text-md text-neutral-300">
                    Nenhuma transação encontrada
                  </span>
                </div>
              )}

              {!hasTransactions && isLoadingTransactions ? (
                <div className="flex min-h-80 w-full items-center justify-center">
                  <Spinner className="h-8 w-8" />
                </div>
              ) : (
                transactions.map((transaction) => (
                  <TransactionItem
                    onClick={() => handleEditTransationModalOpen(transaction)}
                    key={transaction.id}
                    name={transaction.name}
                    categoryId={transaction.categoryId}
                    date={transaction.date}
                    type={transaction.type}
                    value={transaction.value}
                    id={transaction.id}
                  />
                ))
              )}
            </main>
          </section>

          <NewTransactionModal />
          {selectedTransaction && <UpdateTransactionModal />}
        </div>
      )}
    </>
  )
}
