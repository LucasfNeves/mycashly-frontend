import { SliderMonths } from '@/view/components/SliderMonths'
import { Spinner } from '@/view/components/Spinner'
import { useDashboardFiltersController } from './useDashboardFiltersController'
import { ExpenseChartContainer } from '../ExpenseChart'
import { SummaryCard } from '../SummaryCard'
import { ExpenseIcon } from '@/view/components/icons/ExpenseIcon'
import { IncomeIcon } from '@/view/components/icons/IncomeIcon'

export function DashboardFilters() {
  const {
    filters,
    handleMonthChange,
    isInitialLoadingTopFiveExpenses,
    hasExpenses,
    getBalanceDataFiltered,
    getBalanceIsLoading,
    getBalanceIsFetching,
  } = useDashboardFiltersController()

  return (
    <>
      {!hasExpenses && isInitialLoadingTopFiveExpenses ? (
        <div className="flex h-96 w-full items-center justify-center rounded-md">
          <Spinner className="h-8 w-8" />
        </div>
      ) : (
        <section className="flex flex-col gap-8">
          <div className="relative mt-8 w-full">
            <SliderMonths
              filters={filters}
              handleChangeMonth={handleMonthChange}
            />
          </div>

          <main className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between">
            <SummaryCard
              type="incomes"
              icon={<IncomeIcon className="h-10" />}
              description="Total de Receitas"
              value={getBalanceDataFiltered?.incomes}
              initialLoading={getBalanceIsLoading}
              loading={getBalanceIsFetching}
            />

            <SummaryCard
              type="expenses"
              icon={<ExpenseIcon className="h-10" />}
              description="Total de Despesas"
              value={getBalanceDataFiltered?.expenses}
              initialLoading={getBalanceIsLoading}
              loading={getBalanceIsFetching}
            />

            <SummaryCard
              type="investments"
              icon={''}
              description="Total de Investimentos"
              value={getBalanceDataFiltered?.investments}
              initialLoading={getBalanceIsLoading}
              loading={getBalanceIsFetching}
            />
          </main>

          <ExpenseChartContainer />
        </section>
      )}
    </>
  )
}
