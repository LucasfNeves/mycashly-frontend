import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { httpClient } from '../httpClient'

type TopFiveExpensesResponse = Array<TransactionDetails>

export type TopFiveExpensesFilters = {
  month: number
  year: number
}

export async function getTopFiveExpenses(filters: TopFiveExpensesFilters) {
  const { data } = await httpClient.get<TopFiveExpensesResponse>(
    '/transactions/top-five-expenses',
    { params: filters },
  )

  return data
}
