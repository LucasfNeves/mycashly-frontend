import { BalanceCard } from './components/BalanceCard'
import { HeaderDashboard } from './components/HeaderDashboard'
import { DashboardFilters } from './components/DashboardFilters'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-y-4">
      <HeaderDashboard />

      <main className="w-full">
        <section className="flex flex-col gap-4">
          <h2 className="text:base text-neutral-300 lg:text-xl">Resultados</h2>
          <div className="flex w-full flex-col md:flex-row lg:justify-between">
            <BalanceCard />
          </div>
        </section>
      </main>

      <DashboardFilters />
    </div>
  )
}
