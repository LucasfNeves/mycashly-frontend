import { useGetTopFiveExpenses } from '@/app/hooks/services/transactions/useGetTopFiveExpenses'
import { useStore } from '@/app/store'
import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'

export function useDashboardFiltersController() {
  const { filters, setFilters } = useStore(
    useShallow((state) => ({
      filters: state.dashboard.filters,
      setFilters: state.dashboard.setFilters,
    })),
  )

  const {
    isInitialLoadingTopFiveExpenses,
    refetchTopFiveExpenses,
    topFiveExpenses,
  } = useGetTopFiveExpenses(filters)

  const handleMonthChange = (month: number) => {
    setFilters({
      ...filters,
      month,
    })
  }

  useEffect(() => {
    refetchTopFiveExpenses()
  }, [filters, refetchTopFiveExpenses])

  const hasExpenses = topFiveExpenses.length >= 3

  return {
    filters,
    handleMonthChange,
    isInitialLoadingTopFiveExpenses,
    topFiveExpenses,
    hasExpenses,
  }
}
