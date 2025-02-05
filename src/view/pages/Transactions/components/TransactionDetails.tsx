import { formatCurrency } from '@/app/utils/formatCurrency'
import { cn } from '@/app/lib/utils'

export interface TransactionDetailsProps {
  id: number
  category: string
  date: string
  value: number
  type: 'income' | 'investment' | 'expense'
}

export function TransactionDetails({
  category,
  date,
  type,
  value,
  id,
}: TransactionDetailsProps) {
  return (
    <section
      key={id}
      className="flex w-full items-center justify-between gap-8 rounded-md bg-darkBlue-600 p-3"
    >
      <div className="flex flex-col items-start gap-1">
        <p
          className="text-start text-sm font-bold text-white"
          aria-label="Salário"
        >
          {category}
        </p>
        <small
          className="text-start text-[12px] text-neutral-300"
          aria-label="Data do pagamento"
        >
          {date}
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
    </section>
  )
}
