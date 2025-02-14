import { useAuth } from '@/app/hooks/useAuth'
import { useGetUserBalance } from '@/app/hooks/services/users/useGetUserBalance'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useGetTopFiveExpenses } from '@/app/hooks/services/transactions/useGetTopFiveExpenses'

export function useDashboardController() {
  const { getUserData } = useAuth()
  const { getBalanceData, getBalanceIsError } = useGetUserBalance()

  const [showValues, setShowValues] = useState(false)

  const [filters, setFilters] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  })

  const {
    isFetchingTopFiveExpenses,
    isInitialLoadingTopFiveExpenses,
    refetchTopFiveExpenses,
    topFiveExpenses,
  } = useGetTopFiveExpenses(filters)

  const handleMonthChange = (month: number) => {
    setFilters((prev) => ({ ...prev, month }))
  }

  useEffect(() => {
    refetchTopFiveExpenses()
  }, [filters, refetchTopFiveExpenses])

  const handleShowValues = () => {
    setShowValues(!showValues)
  }

  function getFirstName(userName: string) {
    const [firstName] = userName.split(' ')

    return firstName
  }

  if (getBalanceIsError) {
    toast.error('Erro ao buscar saldo do usuário')
  }

  return {
    getUserData,
    getFirstName,
    getBalanceData,
    showValues,
    handleShowValues,
    filters,
    handleMonthChange,
    topFiveExpenses,
    isFetchingTopFiveExpenses,
    isInitialLoadingTopFiveExpenses,
    refetchTopFiveExpenses,
  }
}
