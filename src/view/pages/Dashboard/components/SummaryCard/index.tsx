import { formatCurrency } from '@/app/utils/formatCurrency'
import { cn } from '@/lib/utils'
import { useSummaryCardController } from './useSummaryCardController'

interface SummaryCardProps {
  icon: React.ReactNode
  description: string
  type: 'expenses' | 'incomes' | 'investments'
}

export function SummaryCard({ icon, description, type }: SummaryCardProps) {
  console.log('summary card render')

  const { getBalanceData, showValues } = useSummaryCardController()

  const typeForGetValue = getBalanceData?.[type as keyof typeof getBalanceData]

  return (
    <section className="flex min-h-48 w-full min-w-56 flex-1 flex-col justify-between overflow-x-auto rounded-md bg-darkBlue-700 p-5 lg:px-9 lg:py-5">
      <header className="flex flex-col gap-4">
        <div>{icon}</div>

        <h2 className="text-neutral-300">{description}</h2>
      </header>

      <p
        className={cn(
          'text-2xl font-bold text-white',
          !showValues && 'blur-md',
        )}
      >
        {formatCurrency(typeForGetValue ?? 0)}
      </p>
    </section>
  )
}
