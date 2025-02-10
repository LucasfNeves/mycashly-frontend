import { createContext, useState } from 'react'
import { useAuth } from '../hooks/contexts/useAuth'
import { useGetUserBalance } from '../hooks/services/users/useGetUserBalance'
import { UserBalanceResponse } from '../entities/UserBalanceResponse'
import { User } from '../entities/User'
import { toast } from 'react-toastify'

interface DashboardContextType {
  data?: User
  getFirstName: (userName: string) => string
  userBalanceData?: UserBalanceResponse
  getBalanceisError: boolean
  showValues: boolean
  handleShowValues: () => void
}

interface DashboardProviderProps {
  children: React.ReactNode
}

export const DashboardContext = createContext({} as DashboardContextType)

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [showValues, setShowValues] = useState(false)

  const handleShowValues = () => {
    setShowValues(!showValues)
  }

  const { data, signedIn } = useAuth()
  const { data: userBalanceData, isError: getBalanceisError } =
    useGetUserBalance(signedIn)

  function getFirstName(userName: string) {
    const [firstName] = userName.split(' ')

    return firstName
  }

  if (getBalanceisError && signedIn) {
    toast.error('Erro ao buscar saldo do usuário')
  }

  return (
    <DashboardContext.Provider
      value={{
        data,
        getFirstName,
        userBalanceData,
        getBalanceisError,
        showValues,
        handleShowValues,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
