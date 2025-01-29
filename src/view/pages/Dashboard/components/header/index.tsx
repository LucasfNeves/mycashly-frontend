import { Hand } from 'lucide-react'
import { ThemeToggleButton } from '../../../../components/ThemeToggleButton'
import { UserSettingsButton } from '../../../../components/UserSettingsButton'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1 py-6">
        <div className="flex items-center gap-2 text-white">
          <h1 className="text-2xl">Olá, Lucas Farias</h1>
          <span>
            <Hand className="h-6 text-orange-300" />
          </span>
        </div>
        <small className="text-sm text-neutral-300">
          Aqui está o que aconteceu nas suas finanças esse mês!
        </small>
      </div>

      <div className="flex items-center gap-6">
        <ThemeToggleButton />
        <UserSettingsButton />
      </div>
    </header>
  )
}
