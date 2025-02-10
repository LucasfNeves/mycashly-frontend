import { Category } from '@/app/entities/Category'
import { httpClient } from '../httpClient'

export type CategoriesResponse = { categories: Category[] }

export async function getAllCategories() {
  const { data } = await httpClient.get<CategoriesResponse>(`/categories`)

  return data
}
