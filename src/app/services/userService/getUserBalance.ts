import { UserBalanceResponse } from '@/app/types/user-balance'
import { httpClient } from '../httpClient'

export async function getUserBalance() {
  const { data } = await httpClient<UserBalanceResponse>('/users/balance')

  return data
}
