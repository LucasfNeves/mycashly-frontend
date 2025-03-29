import { create } from 'zustand'
import { createDashboardSlice } from './slice/DashboardSlice'
import { Store } from './Store'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

export const useStore = create<Store>()(
  devtools(
    immer((...params) => ({
      dashboard: createDashboardSlice(...params),
    })),
    { enabled: import.meta.env.DEV },
  ),
)
