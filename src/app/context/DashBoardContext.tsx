import { createContext } from 'react'
import { useAuth } from '../hooks/useAuth'

interface DashboardContextType {
  data?: User
}

interface DashboardProviderProps {
  children: React.ReactNode
}

export const DashboardContext = createContext({} as DashboardContextType)

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const { data } = useAuth()

  return (
    <DashboardContext.Provider value={{ data }}>
      {children}
    </DashboardContext.Provider>
  )
}
