import { useState } from 'react'
import { TransactionDetails } from '@/app/entities/TransactionDetails'

export function useTransactionController() {
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
    handleCloseNewTransactionModal,
    handleOpenNewTransactionModal,
    handleEditTransationModalOpen,
    handleEditTransationModalClose,
    editTransactionModalOpen,
    newTransactionModalOpen,
    selectedTransaction,
  }
}
