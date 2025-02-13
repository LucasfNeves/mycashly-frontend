import { User } from '@/app/entities/User'
import { Settings2 } from 'lucide-react'

interface UserSettingsButtonProps {
  onClick: () => void
  getUserData: User | undefined
  getFirstName: (name: string) => string
}

export function UserSettingsButton({
  onClick,
  getFirstName,
  getUserData,
}: UserSettingsButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex min-w-32 max-w-52 items-center gap-3 rounded-full bg-darkBlue-700 p-2 text-white transition-all hover:cursor-pointer hover:bg-darkBlue-600 hover:duration-300"
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primaryBlue-500">
        LF
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <span className="w-full truncate text-start text-sm font-medium">
          {getFirstName(getUserData?.name ?? '')}
        </span>
        <small className="w-full truncate text-start text-xs text-gray-400">
          {getUserData?.email}
        </small>
      </div>
      <Settings2 className="h-6 flex-shrink-0 text-primaryBlue-500" />
    </button>
  )
}
