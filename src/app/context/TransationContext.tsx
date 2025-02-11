import React, { createContext, useState } from 'react'
import { Category } from '../entities/Category'
import { useGetAllCategories } from '../hooks/services/categories/useGetAllCategories'
import { useGetAllTransactions } from '../hooks/services/transactions/useGetAllTransactions'
import { TransactionDetails } from '../entities/TransactionDetails'

interface TransactionContextProps {
  categories: Category[]
  isFetchingAllCategories: boolean
  transactions: TransactionDetails[]
  newTransactionModalOpen: boolean
  editTransactionModalOpen: boolean
  selectedTransaction: TransactionDetails | null
  handleCloseNewTransactionModal: () => void
  handleOpenNewTransactionModal: () => void
  handleEditTransationModalOpen: (transaction: TransactionDetails) => void
  handleEditTransationModalClose: () => void
}

interface TransactionsProvider {
  children: React.ReactNode
}

export const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps,
)

export function TransactionProvider({ children }: TransactionsProvider) {
  const { transactions } = useGetAllTransactions()
  const { categories, isFetchingAllCategories } = useGetAllCategories()

  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false)
  const [editTransactionModalOpen, setEditTransactionModalOpen] =
    useState(false)

  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionDetails | null>(null)

  const handleCloseNewTransactionModal = () => {
    setNewTransactionModalOpen(false)
  }

  const handleOpenNewTransactionModal = () => {
    setNewTransactionModalOpen(true)
  }

  const handleEditTransationModalOpen = (transaction: TransactionDetails) => {
    setSelectedTransaction(transaction)
    setEditTransactionModalOpen(true)
  }

  const handleEditTransationModalClose = () => {
    setSelectedTransaction(null)
    setEditTransactionModalOpen(false)
  }

  return (
    <TransactionContext.Provider
      value={{
        categories,
        isFetchingAllCategories,
        transactions,
        newTransactionModalOpen,
        editTransactionModalOpen,
        selectedTransaction,
        handleCloseNewTransactionModal,
        handleOpenNewTransactionModal,
        handleEditTransationModalOpen,
        handleEditTransationModalClose,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
