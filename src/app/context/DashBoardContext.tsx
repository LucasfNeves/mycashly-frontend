import { createContext } from 'react'
import { useAuth } from '../hooks/useAuth'

interface DashboardContextType {
  data?: User
  getFirstName: (userName: string) => string
}

interface DashboardProviderProps {
  children: React.ReactNode
}

export const DashboardContext = createContext({} as DashboardContextType)

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const { data } = useAuth()

  function getFirstName(userName: string) {
    const [firstName] = userName.split(' ')

    return firstName
  }

  return (
    <DashboardContext.Provider value={{ data, getFirstName }}>
      {children}
    </DashboardContext.Provider>
  )
}
