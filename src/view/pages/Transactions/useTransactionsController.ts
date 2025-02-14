import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { useGetAllCategories } from '@/app/hooks/services/categories/useGetAllCategories'
import { useGetAllTransactions } from '@/app/hooks/services/transactions/useGetAllTransactions'
import { TransacttionsFilters } from '@/app/services/transactionsService/getAllTransations'
import { useEffect, useState } from 'react'

export function useTransactionsController() {
  const [filters, setFilters] = useState<TransacttionsFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  })

  const {
    transactions,
    isLoadingTransactions,
    isInitialLoadingTransactions,
    refetchTransactions,
  } = useGetAllTransactions(filters)
  const { categories, isFetchingAllCategories } = useGetAllCategories()

  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false)
  const [editTransactionModalOpen, setEditTransactionModalOpen] =
    useState(false)

  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionDetails | null>(null)

  const handleChangeMonth = (month: number) => {
    setFilters((prev) => ({ ...prev, month }))
  }

  useEffect(() => {
    refetchTransactions()
  }, [filters, refetchTransactions])

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
    handleChangeMonth,
    filters,
  }
}
