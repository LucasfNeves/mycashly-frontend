import { cn } from '@/lib/utils'

interface TransactionDetailsProps {
  category: string
  date: string
  value: string
  type: 'income' | 'investment' | 'expense'
}

export function TransactionDetails({
  category,
  date,
  type,
  value,
}: TransactionDetailsProps) {
  return (
    <section className="flex w-full items-center justify-between rounded-md bg-darkBlue-600 p-3">
      <div className="flex flex-col items-center gap-1">
        <p
          className="w-full text-start text-sm font-bold text-white"
          aria-label="Salário"
        >
          {category}
        </p>
        <small
          className="w-full text-start text-[12px] text-neutral-300"
          aria-label="Data do pagamento"
        >
          {date}
        </small>
      </div>

      <div className="flex items-center gap-4">
        <p
          className={cn(
            'text-base',
            type === 'expense' ? 'text-red-500' : 'text-green-500',
          )}
        >
          {value}
        </p>
      </div>
    </section>
  )
}
