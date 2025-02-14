import { IncomeIcon } from '@/view/components/icons/IncomeIcon'
import { BalanceCard } from './components/BalanceCard'
import { Header } from './components/header'
import { SummaryCard } from './components/SummaryCard'
import { ExpenseIcon } from '@/view/components/icons/ExpenseIcon'
import { ExpenseChart } from './components/ExpenseChart'
import { useDashboardController } from './useDashboardController'
import { SliderMonths } from '@/view/components/SliderMonths'
import { Spinner } from '@/view/components/Spinner'
import EmptyStateIlustrator from '@/view/assets/images/empty-state.svg'

export function Dashboard() {
  const {
    getBalanceData,
    showValues,
    getFirstName,
    getUserData,
    handleShowValues,
    filters,
    handleMonthChange,
    isFetchingTopFiveExpenses,
    topFiveExpenses,
    isInitialLoadingTopFiveExpenses,
  } = useDashboardController()

  const hasExpenses = topFiveExpenses.length >= 3

  return (
    <div className="flex flex-col gap-y-4">
      <Header getFirstName={getFirstName} getUserData={getUserData} />

      <main className="w-full">
        <section className="flex flex-col gap-4">
          <h2 className="text:base text-neutral-300 lg:text-xl">Resultados</h2>

          <div className="flex w-full flex-col gap-8 md:flex-row lg:justify-between">
            <BalanceCard
              getBalanceData={getBalanceData}
              showValues={showValues}
              handleShowValues={handleShowValues}
            />

            <SummaryCard
              showValues={showValues}
              icon={<IncomeIcon className="h-10" />}
              value={getBalanceData?.incomes ?? 0}
              description="Total de Receitas"
            />

            <SummaryCard
              showValues={showValues}
              icon={<ExpenseIcon className="h-10" />}
              value={getBalanceData?.expenses ?? 0}
              description="Total de Despesas"
            />
          </div>
        </section>
      </main>

      {!hasExpenses && isInitialLoadingTopFiveExpenses ? (
        <div className="flex h-96 w-full items-center justify-center rounded-md">
          <Spinner className="h-8 w-8" />
        </div>
      ) : (
        <section className="flex flex-col gap-8">
          <div className="relative mt-8 w-full">
            <SliderMonths
              filters={filters}
              handleChangeMonth={handleMonthChange}
            />
          </div>
          <div className="flex h-96 w-full flex-col items-center justify-center gap-4 rounded-md bg-darkBlue-700 p-4 lg:p-6">
            {!hasExpenses && isFetchingTopFiveExpenses && (
              <Spinner className="h-8 w-8" />
            )}

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
                  Despesas insuficientes para gerar o gráfico. Tente selecionar
                  outro mês ou ano ou adicione pelo menos três despesas.
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
        </section>
      )}
    </div>
  )
}
