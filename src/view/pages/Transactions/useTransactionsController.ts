import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { useGetAllCategories } from '@/app/hooks/services/categories/useGetAllCategories'
import { useGetAllTransactions } from '@/app/hooks/services/transactions/useGetAllTransactions'
import { useState } from 'react'

export function useTransactionsController() {
  const { transactions, isLoadingTransactions, isInitialLoadingTransactions } =
    useGetAllTransactions()
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
  return {
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
    isLoadingTransactions,
    isInitialLoadingTransactions,
  }
}
