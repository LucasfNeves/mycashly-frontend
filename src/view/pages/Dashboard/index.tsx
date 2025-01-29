import { Header } from '@/view/pages/Dashboard/components/header'
import { Sidebar } from './components/Aside'

export function Dashboard() {
  return (
    <div className="grid grid-cols-[13rem_auto] bg-darkBlue-900">
      <Sidebar />

      <div className="bg-darkBlue-900 px-6">
        <Header />

        <main>Conteúdo</main>
      </div>
    </div>
  )
}
