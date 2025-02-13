import { useAuth } from '@/app/hooks/useAuth'
import { useGetUserBalance } from '@/app/hooks/services/users/useGetUserBalance'
import { useState } from 'react'
import { toast } from 'react-toastify'

export function useDashboardController() {
  const [showValues, setShowValues] = useState(false)

  const handleShowValues = () => {
    setShowValues(!showValues)
  }

  const { getUserData } = useAuth()
  const { getBalanceData, getBalanceIsError } = useGetUserBalance()

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
  }
}
