import { Header } from './components/header'
import { IncomeIcon } from '@/view/components/icons/IncomeIcon'
import { ExpenseIcon } from '@/view/components/icons/ExpenseIcon'
import { SummaryCard } from './components/SummaryCard'
import { BalanceCard } from './components/BalanceCard'
import { SliderMonths } from '../../components/SliderMonths'
import { ExpenseChart } from './components/ExpenseChart'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-y-4">
      <Header />

      <main className="w-full">
        <section className="flex flex-col gap-4">
          <h2 className="text:base text-neutral-300 lg:text-xl">Resultados</h2>

          <div className="flex w-full flex-col gap-8 md:flex-row lg:justify-between">
            <BalanceCard />

            <SummaryCard
              icon={<IncomeIcon className="h-10" />}
              value="R$ 500,00"
              description="Total de Receitas"
            />

            <SummaryCard
              icon={<ExpenseIcon className="h-10" />}
              value="R$ 500,00"
              description="Total de Despesas"
            />
          </div>
        </section>
      </main>

      <section className="flex flex-col gap-8">
        <div className="relative mt-8 w-full">
          <SliderMonths />
        </div>

        <div className="flex h-96 w-full flex-col items-center justify-center gap-4 rounded-md bg-darkBlue-700 p-4">
          <h2 className="w-full text-start text-xl text-neutral-300">
            Top 5 Gastos do Mês
          </h2>
          <ExpenseChart />
        </div>
      </section>
    </div>
  )
}
