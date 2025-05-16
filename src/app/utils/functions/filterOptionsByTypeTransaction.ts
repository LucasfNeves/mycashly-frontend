import { Category } from '@/app/entities/Category'
import { TransactionType } from '@/app/types/transaction-type'

interface Option {
  label: string
  value: string
}

export function filterOptionsByTypeTransaction(
  categories: Category[],
  type?: TransactionType | null,
): Option[] {
  if (!type) return []

  return categories
    .filter((category) => category.type === type)
    .map((category) => ({
      label: category.name,
      value: category.id,
    }))
}
