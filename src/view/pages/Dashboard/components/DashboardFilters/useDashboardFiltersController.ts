import { useGetTopFiveExpenses } from '@/app/hooks/services/transactions/useGetTopFiveExpenses'
import { useGetUserBalanceFiltered } from '@/app/hooks/services/users/useGetUserBalanceFiltered'
import { useStore } from '@/app/store'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useShallow } from 'zustand/react/shallow'

export function useDashboardFiltersController() {
  const { filters, setFilters } = useStore(
    useShallow((state) => ({
      filters: state.dashboard.filters,
      setFilters: state.dashboard.setFilters,
    })),
  )

  const { refetchTopFiveExpenses, topFiveExpenses } =
    useGetTopFiveExpenses(filters)

  const {
    getBalanceDataFiltered,
    getBalanceFilteredRefetch,
    getBalanceIsLoading,
    getBalanceIsError,
    getBalanceIsFetching,
  } = useGetUserBalanceFiltered(filters)

  if (getBalanceIsError) {
    toast.error(
      'Ocorreu um erro ao buscar o saldo filtrado. Tente novamente mais tarde.',
    )
  }

  const handleMonthChange = (month: number) => {
    setFilters({
      ...filters,
      month,
    })
  }

  useEffect(() => {
    refetchTopFiveExpenses()
    getBalanceFilteredRefetch()
  }, [filters, refetchTopFiveExpenses, getBalanceFilteredRefetch])

  return {
    filters,
    handleMonthChange,
    topFiveExpenses,
    getBalanceDataFiltered,
    getBalanceIsLoading,
    getBalanceIsFetching,
  }
}
