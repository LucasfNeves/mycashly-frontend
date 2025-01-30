import { Button } from '@/view/components/Button'
import { SliderMonths } from '@/view/components/SliderMonths'
import { PlusCircleIcon } from 'lucide-react'
import { TransactionDetails } from './components/TransactionDetails'

export function Transactions() {
  return (
    <div className="flex min-h-screen flex-col gap-16">
      <header className="flex flex-col items-center justify-between gap-16">
        <div className="flex w-full items-center justify-end">
          <Button className="flex gap-2 px-6">
            Adicionar Transação <PlusCircleIcon />
          </Button>
        </div>

        <div className="w-full">
          <SliderMonths />
        </div>
      </header>

      <section className="flex flex-col gap-8">
        <header className="flex items-center justify-between gap-4">
          <h1 className="text-xl text-neutral-300">Transações</h1>
        </header>
        <main className="flex w-full flex-col items-start justify-start gap-4 rounded-md bg-darkBlue-700 p-4">
          <TransactionDetails
            category="Alimentação"
            date="04/02/2025"
            type="expense"
            value="110"
          />

          <TransactionDetails
            category="Salário"
            date="04/02/2025"
            type="income"
            value="1.500"
          />

          <TransactionDetails
            category="Investimento"
            date="04/02/2025"
            type="investment"
            value="500"
          />

          <TransactionDetails
            category="Alimentação"
            date="04/02/2025"
            type="expense"
            value="110"
          />
        </main>
      </section>
    </div>
  )
}
