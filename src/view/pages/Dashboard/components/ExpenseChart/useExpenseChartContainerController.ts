import { useGetTopFiveExpenses } from '@/app/hooks/services/transactions/useGetTopFiveExpenses'
import { useStore } from '@/app/store'
import { useShallow } from 'zustand/react/shallow'

export function useExpenseChartContainerController() {
  const { filters } = useStore(
    useShallow((state) => ({
      filters: state.dashboard.filters,
    })),
  )

  const { topFiveExpenses, isFetchingTopFiveExpenses } =
    useGetTopFiveExpenses(filters)

  const hasExpenses = topFiveExpenses.length >= 3

  return {
    topFiveExpenses,
    isFetchingTopFiveExpenses,
    hasExpenses,
  }
}
