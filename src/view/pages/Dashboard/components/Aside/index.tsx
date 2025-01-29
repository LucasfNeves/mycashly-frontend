import { useAuth } from '@/hooks/useAuth'
import { ButtonNavigate } from '@/view/components/ButtonNavigate'
import { Logo } from '@/view/components/Logo'
import { LayoutDashboard, Table } from 'lucide-react'
import { RxExit } from 'react-icons/rx'

export function Sidebar() {
  const { signOut } = useAuth()

  return (
    <aside className="flex h-screen flex-col items-center justify-start bg-darkBlue-700 p-6">
      <Logo className="w-36" />
      <div className="flex h-full flex-col justify-between">
        <div className="mt-8 flex w-full flex-col gap-4">
          <h2 className="text-base text-white">Menu</h2>
          <nav className="flex w-full flex-col gap-4">
            <ButtonNavigate to={'/'}>
              <LayoutDashboard className="h-4" />
              <span>Dashboard</span>
            </ButtonNavigate>

            <ButtonNavigate to={'/trasactions'}>
              <Table className="h-4" />
              <span>Transações</span>
            </ButtonNavigate>
          </nav>
        </div>

        <div className="flex w-full flex-col gap-4">
          <button
            onClick={signOut}
            className="flex items-center gap-2 text-white transition-all hover:text-red-400 hover:duration-300"
          >
            <RxExit className="h-6" />
            Sair
          </button>
        </div>
      </div>
    </aside>
  )
}
