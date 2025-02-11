import { IncomeIcon } from '@/view/components/icons/IncomeIcon'
import { BalanceCard } from './BalanceCard'
import { Header } from './header'
import { SummaryCard } from './SummaryCard'
import { ExpenseIcon } from '@/view/components/icons/ExpenseIcon'
import { SliderMonths } from '@/view/components/SliderMonths'
import { ExpenseChart } from './ExpenseChart'
import { useDashboard } from '@/app/hooks/contexts/useDashboard'

export function DashboardMain() {
  const { userBalanceData } = useDashboard()

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
              value={userBalanceData?.incomes ?? 0}
              description="Total de Receitas"
            />

            <SummaryCard
              icon={<ExpenseIcon className="h-10" />}
              value={userBalanceData?.expenses ?? 0}
              description="Total de Despesas"
            />
          </div>
        </section>
      </main>

      <section className="flex flex-col gap-8">
        <div className="relative mt-8 w-full">
          <SliderMonths />
        </div>

        <div className="flex h-96 w-full flex-col items-center justify-center gap-4 rounded-md bg-darkBlue-700 p-4 lg:p-6">
          <h2 className="w-full text-start text-xl text-neutral-300">
            Top 5 Gastos do Mês
          </h2>
          <ExpenseChart />
        </div>
      </section>
    </div>
  )
}
