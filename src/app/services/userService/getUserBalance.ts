import { UserBalanceResponse } from '@/app/entities/UserBalanceResponse'
import { httpClient } from '../httpClient'

export async function getUserBalance() {
  const { data } = await httpClient.get<UserBalanceResponse>('/users/balance')

  return data
}
