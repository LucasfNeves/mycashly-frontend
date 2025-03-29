import { StateCreator } from 'zustand'
import { DashboardSlice } from './slice/DashboardSlice'

export type Store = {
  dashboard: DashboardSlice
}

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/immer', never]],
  [],
  TSlice
>
