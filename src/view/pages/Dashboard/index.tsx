import { DashboardProvider } from '@/app/context/DashBoardContext'
import { DashboardMain } from './components/DashboardMain'

export function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardMain />
    </DashboardProvider>
  )
}
