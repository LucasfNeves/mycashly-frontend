import { useGetUserBalance } from '@/app/hooks/services/users/useGetUserBalance'
import { useStore } from '@/app/store'
import { toast } from 'react-toastify'
import { useShallow } from 'zustand/react/shallow'

export function useBalanceCardController() {
  const { getBalanceData, getBalanceIsError } = useGetUserBalance()

  const { setShowValues, showValues } = useStore(
    useShallow((state) => ({
      showValues: state.dashboard.showValues,
      setShowValues: state.dashboard.setShowValues,
    })),
  )

  const handleShowValues = () => {
    setShowValues(!showValues)
  }

  if (getBalanceIsError) {
    toast.error('Erro ao carregar o saldo. Tente novamente mais tarde.')
  }

  return {
    getBalanceData,
    showValues,
    handleShowValues,
  }
}
