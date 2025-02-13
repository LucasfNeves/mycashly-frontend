import { IncomeIcon } from '@/view/components/icons/IncomeIcon'
import { BalanceCard } from './components/BalanceCard'
import { Header } from './components/header'
import { SummaryCard } from './components/SummaryCard'
import { ExpenseIcon } from '@/view/components/icons/ExpenseIcon'
import { SliderMonths } from '@/view/components/SliderMonths'
import { ExpenseChart } from './components/ExpenseChart'
import { useDashboardController } from './useDashboardController'

export function Dashboard() {
  const {
    getBalanceData,
    showValues,
    getFirstName,
    getUserData,
    handleShowValues,
  } = useDashboardController()

  return (
    <div className="flex flex-col gap-y-4">
      <Header getFirstName={getFirstName} getUserData={getUserData} />

      <main className="w-full">
        <section className="flex flex-col gap-4">
          <h2 className="text:base text-neutral-300 lg:text-xl">Resultados</h2>

          <div className="flex w-full flex-col gap-8 md:flex-row lg:justify-between">
            <BalanceCard
              getBalanceData={getBalanceData}
              showValues={showValues}
              handleShowValues={handleShowValues}
            />

            <SummaryCard
              showValues={showValues}
              icon={<IncomeIcon className="h-10" />}
              value={getBalanceData?.incomes ?? 0}
              description="Total de Receitas"
            />

            <SummaryCard
              showValues={showValues}
              icon={<ExpenseIcon className="h-10" />}
              value={getBalanceData?.expenses ?? 0}
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
