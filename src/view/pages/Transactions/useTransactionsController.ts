import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { useGetAllCategories } from '@/app/hooks/services/categories/useGetAllCategories'
import { useGetAllTransactions } from '@/app/hooks/services/transactions/useGetAllTransactions'
import { TransacttionsFilters } from '@/app/services/transactionsService/getAllTransations'
import { TransactionType } from '@/app/types/transaction-type'
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

  const [newTransactionModalOpen, setNewTransactionModalOpen] =
    useState<boolean>(false)
  const [editTransactionModalOpen, setEditTransactionModalOpen] =
    useState<boolean>(false)
  const [transactionType, setTransactionType] = useState<
    TransactionType | undefined
  >(undefined)

  const [dropdownMenuTransactionTypeOpen, setDropdownMenuTransactionTypeOpen] =
    useState<boolean>(false)

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
    setTransactionType(undefined)
  }

  const handleOpenNewTransactionModal = (type: TransactionType) => {
    setNewTransactionModalOpen(true)
    setTransactionType(type)
  }

  const handleEditTransationModalOpen = (transaction: TransactionDetails) => {
    setSelectedTransaction(transaction)
    setEditTransactionModalOpen(true)
    setDropdownMenuTransactionTypeOpen(true)
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
    transactionType,
    dropdownMenuTransactionTypeOpen,
  }
}
