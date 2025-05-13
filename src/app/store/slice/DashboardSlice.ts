import { TopFiveExpensesFilters } from '@/app/services/transactionsService/getTopFiveExpenses'
import { StoreSlice } from '../Store'

type DashboardStore = {
  filters: TopFiveExpensesFilters
  showValues: boolean
}

// Actions são funções que alteram o estado da store
type DashboardActions = {
  setFilters: (filters: DashboardStore['filters']) => void
  setShowValues: (showValues: DashboardStore['showValues']) => void
}

export type DashboardSlice = DashboardStore & DashboardActions

export const createDashboardSlice: StoreSlice<DashboardSlice> = (set) => ({
  filters: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },

  setFilters: (filters) => {
    set((prevState) => {
      prevState.dashboard.filters = filters
    })
  },

  showValues: true,
  setShowValues: (showValues) => {
    set((prevState) => {
      prevState.dashboard.showValues = showValues
    })
  },
})
