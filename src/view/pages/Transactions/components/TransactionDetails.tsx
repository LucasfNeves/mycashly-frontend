import { formatCurrency } from '@/app/utils/formatCurrency'
import { cn } from '@/app/lib/utils'
import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { formatDate } from '@/app/utils/formatDate'
import { useMemo } from 'react'
import { useGetAllCategories } from '@/app/hooks/services/categories/useGetAllCategories'

interface TransactionDetailsProps extends TransactionDetails {
  onClick: () => void
}

export function TransactionItem({
  categoryId,
  name,
  date,
  type,
  value,
  id,
  onClick,
}: TransactionDetailsProps) {
  const { categories } = useGetAllCategories()

  const category = useMemo(() => {
    return categories?.find((category) => category.id === categoryId)
  }, [categories, categoryId])

  return (
    <button
      onClick={onClick}
      key={id}
      className="flex w-full items-end justify-between gap-8 rounded-md bg-darkBlue-600 p-3 transition-all hover:bg-darkBlue-500 hover:duration-300"
    >
      <div className="flex flex-col items-start gap-2 overflow-x-auto whitespace-nowrap">
        <div className="flex flex-col gap-1">
          <small
            className="text-start text-[12px] text-neutral-200"
            aria-label={category?.name}
          >
            {category?.name}
          </small>
          <p
            className="text-start text-sm font-bold text-white"
            aria-label={name}
          >
            {name}
          </p>
        </div>

        <small
          className="text-start text-[12px] text-neutral-300"
          aria-label="Data do pagamento"
        >
          {formatDate(new Date(date))}
        </small>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
        <p
          className={cn(
            'text-base',
            type === 'EXPENSE' ? 'text-red-500' : 'text-green-500',
          )}
        >
          {type === 'EXPENSE' ? '- ' : '+ '}
          {formatCurrency(Number(value))}
        </p>
      </div>
    </button>
  )
}
