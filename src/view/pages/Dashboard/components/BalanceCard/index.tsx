import { formatCurrency } from '@/app/utils/formatCurrency'
import { cn } from '@/lib/utils'
import { Eye, EyeClosed } from 'lucide-react'
import { useBalanceCardController } from './useBalanceCardController'
import { SkeletonCard } from '@/components/nativeComponents/SkeletonCard'

export function BalanceCard() {
  const {
    getBalanceData,
    handleShowValues,
    showValues,
    getBalanceIsFetching,
    getBalanceIsLoading,
  } = useBalanceCardController()

  if (getBalanceIsFetching || getBalanceIsLoading) {
    return (
      <div className="min-h-48 w-full min-w-56 max-w-96">
        <SkeletonCard />
      </div>
    )
  }

  return (
    <section className="lb:py-5 flex min-h-48 w-full min-w-56 max-w-96 flex-1 flex-col justify-between gap-4 overflow-x-auto rounded-md bg-darkBlue-700 p-5 lg:px-9">
      <header className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-neutral-300">Balanço Total</h2>
          <span
            className={cn(
              'text-2xl font-bold text-white',
              !showValues && 'blur-md',
            )}
          >
            {formatCurrency(getBalanceData?.balance ?? 0)}
          </span>
        </div>

        <button className="text-neutral-200" onClick={handleShowValues}>
          {!showValues ? <EyeClosed size={24} /> : <Eye size={24} />}
        </button>
      </header>

      <div className="flex flex-col gap-2">
        <small className="text-neutral-300">Investidos</small>
        <span
          className={cn(
            'text-lg font-bold text-white',
            !showValues && 'blur-md',
          )}
        >
          {formatCurrency(getBalanceData?.investments ?? 0)}
        </span>
      </div>
    </section>
  )
}
