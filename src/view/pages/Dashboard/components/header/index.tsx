import { Hand } from 'lucide-react'
import { UserSettingsButton } from '../../../../components/UserSettingsButton'
import { UserSettingsModal } from '@/view/components/UserSettingsModal'
import { useHeaderController } from './useHeaderController'
import { User } from '@/app/entities/User'

interface HeaderProps {
  getUserData: User | undefined
  getFirstName: (name: string) => string
}

export function Header({ getUserData, getFirstName }: HeaderProps) {
  const {
    handleUserSettingsModalClose,
    handleUserSettingsModalOpen,
    userSettingsModalOpen,
  } = useHeaderController()

  return (
    <header className="flex items-center justify-start lg:justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-white">
          <h1 className="text-xl lg:text-2xl">
            Olá, {getFirstName(getUserData?.name ?? '')}
          </h1>
          <span>
            <Hand className="h-4 text-orange-300 lg:h-6" />
          </span>
        </div>
        <small className="text-[0.625rem] text-neutral-300 lg:text-sm">
          Aqui está o que aconteceu nas suas finanças esse mês!
        </small>
      </div>

      <div className="hidden items-center gap-6 lg:flex">
        <UserSettingsButton
          getFirstName={getFirstName}
          getUserData={getUserData}
          onClick={handleUserSettingsModalOpen}
        />
      </div>

      <UserSettingsModal
        getUserData={getUserData}
        open={userSettingsModalOpen}
        onClose={handleUserSettingsModalClose}
      />
    </header>
  )
}
