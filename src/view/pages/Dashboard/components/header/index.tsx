import { Hand } from 'lucide-react'
import { ThemeToggleButton } from '../../../../components/ThemeToggleButton'
import { UserSettingsButton } from '../../../../components/UserSettingsButton'

export function Header() {
  return (
    <header className="flex items-center justify-start lg:justify-between">
      <div className="flex flex-col gap-1 py-4 lg:py-6">
        <div className="flex items-center gap-2 text-white">
          <h1 className="text-xl lg:text-2xl">Olá, Lucas Farias</h1>
          <span>
            <Hand className="h-4 text-orange-300 lg:h-6" />
          </span>
        </div>
        <small className="text-[0.625rem] text-neutral-300 lg:text-sm">
          Aqui está o que aconteceu nas suas finanças esse mês!
        </small>
      </div>

      <div className="hidden items-center gap-6 lg:flex">
        <ThemeToggleButton />
        <UserSettingsButton />
      </div>
    </header>
  )
}
