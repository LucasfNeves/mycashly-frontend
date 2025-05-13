import { formatCurrency } from '@/app/utils/formatCurrency'
import { cn } from '@/lib/utils'
import { useSummaryCardController } from './useSummaryCardController'
import { SkeletonCard } from '@/components/nativeComponents/SkeletonCard'

interface SummaryCardProps {
  icon: React.ReactNode
  description: string
  type: 'expenses' | 'incomes' | 'investments'
  value: number | undefined
  loading?: boolean
  initialLoading?: boolean
}

export function SummaryCard({
  icon,
  description,
  value,
  loading,
  initialLoading,
}: SummaryCardProps) {
  const { showValues } = useSummaryCardController()

  if (loading || initialLoading) {
    return <SkeletonCard />
  }

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
        {formatCurrency(value ?? 0)}
      </p>
    </section>
  )
}
