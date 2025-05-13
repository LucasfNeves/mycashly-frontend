import { UserBalanceResponse } from '@/app/entities/UserBalanceResponse'
import { httpClient } from '../httpClient'

export type TransacttionsFilters = {
  month: number
  year: number
}

export async function getUserBalanceFiltered(filters: TransacttionsFilters) {
  const { data } = await httpClient.get<UserBalanceResponse>(
    '/users/balance-filtred',
    {
      params: {
        month: filters.month,
        year: filters.year,
      },
    },
  )

  return data
}
