import { useState } from 'react'
import { TransactionDetailsProps } from '@/app/types/transaction-details'

export function useTransactionController() {
  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false)
  const [editTransactionModalOpen, setEditTransactionModalOpen] =
    useState(false)

  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionDetailsProps | null>(null)

  const handleCreateTransactionClose = () => {
    setNewTransactionModalOpen(false)
  }

  const handleCreateTransactionOpen = () => {
    setNewTransactionModalOpen(true)
  }

  const handleEditTransationModalOpen = (
    transaction: TransactionDetailsProps,
  ) => {
    setSelectedTransaction(transaction)
    setEditTransactionModalOpen(true)
  }

  const handleEditTransationModalClose = () => {
    setSelectedTransaction(null)
    setEditTransactionModalOpen(false)
  }

  return {
    handleCreateTransactionClose,
    handleCreateTransactionOpen,
    handleEditTransationModalOpen,
    handleEditTransationModalClose,
    editTransactionModalOpen,
    newTransactionModalOpen,
    selectedTransaction,
  }
}
