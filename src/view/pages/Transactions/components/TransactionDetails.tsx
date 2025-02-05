import { formatCurrency } from '@/app/utils/formatCurrency'
import { cn } from '@/app/lib/utils'
import { TransactionDetailsProps } from '@/app/types/transaction-details'
import { formatDate } from '@/app/utils/formatDate'

export function TransactionDetails({
  category,
  name,
  date,
  type,
  value,
  id,
  onClick,
}: TransactionDetailsProps) {
  return (
    <button
      onClick={onClick}
      key={id}
      className="flex w-full items-center justify-between gap-8 rounded-md bg-darkBlue-600 p-3"
    >
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col gap-1">
          <small className="text-start text-[12px] text-neutral-200">
            {name}
          </small>
          <p
            className="text-start text-sm font-bold text-white"
            aria-label="Salário"
          >
            {category}
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
            type === 'expense' ? 'text-red-500' : 'text-green-500',
          )}
        >
          {formatCurrency(Number(value))}
        </p>
      </div>
    </button>
  )
}
