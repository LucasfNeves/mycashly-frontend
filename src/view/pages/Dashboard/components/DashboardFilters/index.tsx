import { SliderMonths } from '@/components/SliderMonths'
import { useDashboardFiltersController } from './useDashboardFiltersController'
import { ExpenseChartContainer } from '../ExpenseChart'
import { SummaryCard } from '../SummaryCard'
import { ExpenseIcon } from '@/components/icons/ExpenseIcon'
import { IncomeIcon } from '@/components/icons/IncomeIcon'
import { InvestmentIcon } from '@/components/icons/InvestmentIcon'

export function DashboardFilters() {
  const {
    filters,
    handleMonthChange,
    getBalanceDataFiltered,
    getBalanceIsLoading,
    getBalanceIsFetching,
  } = useDashboardFiltersController()

  return (
    <section className="flex flex-col gap-8">
      <div className="relative mt-8 w-full">
        <SliderMonths filters={filters} handleChangeMonth={handleMonthChange} />
      </div>

      <main className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between">
        <SummaryCard
          type="incomes"
          icon={<IncomeIcon className="h-10" />}
          description="Receitas"
          value={getBalanceDataFiltered?.incomes}
          initialLoading={getBalanceIsLoading}
          loading={getBalanceIsFetching}
        />

        <SummaryCard
          type="expenses"
          icon={<ExpenseIcon className="h-10" />}
          description="Despesas"
          value={getBalanceDataFiltered?.expenses}
          initialLoading={getBalanceIsLoading}
          loading={getBalanceIsFetching}
        />

        <SummaryCard
          type="investments"
          icon={<InvestmentIcon className="h-10" />}
          description="Investimentos"
          value={getBalanceDataFiltered?.investments}
          initialLoading={getBalanceIsLoading}
          loading={getBalanceIsFetching}
        />
      </main>

      <ExpenseChartContainer />
    </section>
  )
}
