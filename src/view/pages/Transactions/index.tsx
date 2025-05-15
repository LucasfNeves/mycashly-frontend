import { useTransactionsController } from './useTransactionsController'
import { Spinner } from '@/view/components/Spinner'
import { SliderMonths } from '@/view/components/SliderMonths'
import { TransactionItem } from './components/TransactionDetails'
import { NewTransactionModal } from './components/Modals/NewTransationModal'
import { UpdateTransactionModal } from './components/Modals/UpdateTransctionModal'
import EmptyStateIlustrator from '@/view/assets/images/empty-state.svg'
import { useState } from 'react'
import { TransactionDropdownMenu } from './components/TransactionDropDownMenu'

export function Transactions() {
  const [menuOpen, setMenuOpen] = useState(false)

  const {
    handleOpenNewTransactionModal,
    handleEditTransationModalOpen,
    selectedTransaction,
    isLoadingTransactions,
    isInitialLoadingTransactions,
    transactions,
    editTransactionModalOpen,
    handleEditTransationModalClose,
    newTransactionModalOpen,
    handleCloseNewTransactionModal,
    handleChangeMonth,
    filters,
    transactionType,
  } = useTransactionsController()

  const hasTransactions = transactions.length > 0

  return (
    <>
      {!hasTransactions && isInitialLoadingTransactions ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Spinner className="h-8 w-8" />
        </div>
      ) : (
        <div className="flex min-h-screen flex-col gap-8">
          <header className="flex flex-col items-center justify-between gap-8">
            <div className="flex w-full items-center justify-end">
              <TransactionDropdownMenu
                onSelect={handleOpenNewTransactionModal}
                open={menuOpen}
                setMenuOpen={setMenuOpen}
              />
            </div>

            <div className="z-0 w-full">
              <SliderMonths
                filters={filters}
                handleChangeMonth={handleChangeMonth}
              />
            </div>
          </header>

          <section className="flex flex-1 flex-col gap-8 overflow-hidden">
            <header className="flex items-center justify-between gap-4">
              <h1 className="text:base text-neutral-300 lg:text-xl">
                Transações
              </h1>
            </header>

            <main className="relative flex w-full flex-1 flex-col items-start justify-start gap-4 overflow-y-auto rounded-md bg-darkBlue-700 p-4">
              {!hasTransactions && !isLoadingTransactions && (
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-4">
                  <figure>
                    <img
                      src={EmptyStateIlustrator}
                      alt=" Nenhuma transação encontrada"
                      className="h-64"
                    />
                  </figure>
                  <span className="text-md text-center text-neutral-300">
                    Nenhuma transação encontrada
                  </span>
                </div>
              )}

              {!hasTransactions && isLoadingTransactions ? (
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-4">
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

          <NewTransactionModal
            handleCloseNewTransactionModal={handleCloseNewTransactionModal}
            newTransactionModalOpen={newTransactionModalOpen}
            transactionType={transactionType}
          />
          {selectedTransaction && (
            <UpdateTransactionModal
              editTransactionModalOpen={editTransactionModalOpen}
              handleEditTransationModalClose={handleEditTransationModalClose}
              selectedTransaction={selectedTransaction}
            />
          )}
        </div>
      )}
    </>
  )
}
