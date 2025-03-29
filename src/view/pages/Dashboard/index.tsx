import { IncomeIcon } from '@/view/components/icons/IncomeIcon'
import { BalanceCard } from './components/BalanceCard'
import { HeaderDashboard } from './components/HeaderDashboard'
import { SummaryCard } from './components/SummaryCard'
import { ExpenseIcon } from '@/view/components/icons/ExpenseIcon'
import { DashboardFilters } from './components/DashboardFilters'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-y-4">
      <HeaderDashboard />

      <main className="w-full">
        <section className="flex flex-col gap-4">
          <h2 className="text:base text-neutral-300 lg:text-xl">Resultados</h2>

          <div className="flex w-full flex-col gap-8 md:flex-row lg:justify-between">
            <BalanceCard />

            <SummaryCard
              type="incomes"
              icon={<IncomeIcon className="h-10" />}
              description="Total de Receitas"
            />

            <SummaryCard
              type="expenses"
              icon={<ExpenseIcon className="h-10" />}
              description="Total de Despesas"
            />
          </div>
        </section>
      </main>

      <DashboardFilters />
    </div>
  )
}
