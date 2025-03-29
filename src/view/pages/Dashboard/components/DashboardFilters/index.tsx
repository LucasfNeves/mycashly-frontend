import { SliderMonths } from '@/view/components/SliderMonths'
import { Spinner } from '@/view/components/Spinner'
import { useDashboardFiltersController } from './useDashboardFiltersController'
import { ExpenseChartContainer } from '../ExpenseChart'

export function DashboardFilters() {
  const {
    filters,
    handleMonthChange,
    isInitialLoadingTopFiveExpenses,
    hasExpenses,
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

          <ExpenseChartContainer />
        </section>
      )}
    </>
  )
}
