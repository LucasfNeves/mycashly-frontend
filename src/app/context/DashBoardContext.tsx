import { createContext, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useGetUserBalance } from '../hooks/services/useGetUserBalanceServer'
import { UserBalanceResponse } from '../types/user-balance'
import { User } from '../types/user'

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
