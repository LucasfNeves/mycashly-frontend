import { User } from '@/app/entities/User'
import { useUserSettingsButtonController } from './useUserSettingsButtonontroller'
import { Settings2 } from 'lucide-react'

interface UserSettingsButtonProps {
  onClick: () => void
  getUserData: User | undefined
  getFirstName?: string
}

export function UserSettingsButton({
  onClick,
  getFirstName,
  getUserData,
}: UserSettingsButtonProps) {
  const { getLetters, isMobile } = useUserSettingsButtonController()

  return !isMobile ? (
    <button
      onClick={onClick}
      className="flex min-w-32 max-w-52 items-center gap-3 rounded-full bg-darkBlue-700 p-2 text-white transition-all hover:cursor-pointer hover:bg-darkBlue-600 hover:duration-300"
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primaryBlue-500">
        <span className="text-sm font-bold">
          {getLetters(getUserData?.name ?? '')}
        </span>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <span className="w-full truncate text-start text-sm font-medium">
          {getFirstName}
        </span>
        <small className="w-full truncate text-start text-xs text-gray-400">
          {getUserData?.email}
        </small>
      </div>

      <span className="text-primaryBlue-500">
        <Settings2 className="h-6 w-6" />
      </span>
    </button>
  ) : (
    <button
      onClick={onClick}
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primaryBlue-500 transition-all hover:bg-primaryBlue-600 hover:duration-300"
    >
      <span className="text-sm font-bold text-neutral-300">
        {getLetters(getUserData?.name ?? '')}
      </span>
    </button>
  )
}
