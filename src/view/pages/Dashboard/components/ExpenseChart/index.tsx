import { ExpenseChart } from './ExpenseChart'
import EmptyStateIlustrator from '@/view/assets/images/empty-state.svg'
import { useExpenseChartContainerController } from './useExpenseChartContainerController'
import { SkeletonChart } from '@/components/nativeComponents/SkeletonChart'

export function ExpenseChartContainer() {
  const { topFiveExpenses, isFetchingTopFiveExpenses, hasExpenses } =
    useExpenseChartContainerController()

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center gap-4 rounded-md bg-darkBlue-700 p-4 lg:p-6">
      {isFetchingTopFiveExpenses && <SkeletonChart />}

      {!hasExpenses && !isFetchingTopFiveExpenses && (
        <div className="flex flex-col items-center justify-center gap-4">
          <figure>
            <img
              src={EmptyStateIlustrator}
              alt=" Nenhuma transação encontrada"
              className="h-64"
            />
          </figure>
          <span className="text-md text-center text-neutral-300">
            Despesas insuficientes para gerar o gráfico. Tente selecionar outro
            mês ou ano ou adicione pelo menos três despesas.
          </span>
        </div>
      )}

      {hasExpenses && !isFetchingTopFiveExpenses && (
        <>
          <h2 className="w-full text-start text-xl text-neutral-300">
            Top gastos do mês
          </h2>
          <ExpenseChart topFiveExpenses={topFiveExpenses} />
        </>
      )}
    </div>
  )
}
