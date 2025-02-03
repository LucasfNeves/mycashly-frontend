import { Button } from '@/view/components/Button'
import { SliderMonths } from '@/view/components/SliderMonths'
import { PlusCircleIcon } from 'lucide-react'
import {
  TransactionDetails,
  TransactionDetailsProps,
} from './components/TransactionDetails'
import { NewTransactionModal } from '../Dashboard/components/NewTransationModal'
import { useState } from 'react'

const transactions = [
  {
    id: 1,
    category: 'Alimentação',
    date: '04/02/2025',
    type: 'expense',
    value: 110,
  } as TransactionDetailsProps,
  {
    id: 2,
    category: 'Salário',
    date: '04/02/2025',
    type: 'income',
    value: 1.5,
  } as TransactionDetailsProps,
  {
    id: 3,
    category: 'Investimento',
    date: '04/02/2025',
    type: 'investment',
    value: 500,
  } as TransactionDetailsProps,
  {
    id: 4,
    category: 'Alimentação',
    date: '04/02/2025',
    type: 'expense',
    value: 110,
  } as TransactionDetailsProps,
]
export function Transactions() {
  const [newTransationModalOpen, setNewTransationModalOpen] = useState(false)

  const handleFilterModalClose = () => {
    setNewTransationModalOpen(false)
  }

  const handleFilterModalOpen = () => {
    setNewTransationModalOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col gap-8 lg:gap-16">
      <header className="flex flex-col items-center justify-between gap-8 lg:gap-16">
        <div className="flex w-full items-center justify-end">
          <Button onClick={handleFilterModalOpen} className="flex gap-2 px-6">
            Adicionar Transação <PlusCircleIcon />
          </Button>
        </div>

        <div className="w-full">
          <SliderMonths />
        </div>
      </header>

      <section className="flex flex-col gap-8">
        <header className="flex items-center justify-between gap-4">
          <h1 className="text:base text-neutral-300 lg:text-xl">Transações</h1>
        </header>
        <main className="flex w-full flex-col items-start justify-start gap-4 rounded-md bg-darkBlue-700 p-4">
          {transactions.map((transaction) => (
            <TransactionDetails
              key={transaction.id}
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
        open={newTransationModalOpen}
        onClose={handleFilterModalClose}
      />
    </div>
  )
}
