import { ButtonNavigate } from '@/view/components/ButtonNavigate'
import { Logo } from '@/view/components/Logo'
import { LayoutDashboard, Table } from 'lucide-react'
import { ExitButton } from './ExitButton'

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-full flex-col items-center justify-start bg-darkBlue-700 p-6">
      <Logo className="w-36" />
      <div className="flex h-full flex-col justify-between">
        <div className="mt-8 flex w-full flex-col gap-4">
          <h2 className="text-base text-white">Menu</h2>
          <nav className="flex w-full flex-col gap-4">
            <ButtonNavigate to={'/'}>
              <LayoutDashboard className="h-4" />
              <span>Dashboard</span>
            </ButtonNavigate>

            <ButtonNavigate to={'/transactions'}>
              <Table className="h-4" />
              <span>Transações</span>
            </ButtonNavigate>
          </nav>
        </div>

        <div className="flex w-full flex-col gap-4">
          <ExitButton />
        </div>
      </div>
    </aside>
  )
}
