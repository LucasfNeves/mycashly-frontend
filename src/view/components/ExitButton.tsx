import { useAuth } from '@/hooks/useAuth'
import { RxExit } from 'react-icons/rx'

export function ExitButton() {
  const { signOut } = useAuth()

  return (
    <button
      onClick={signOut}
      className="flex items-center gap-2 text-white transition-all hover:text-red-400 hover:duration-300"
    >
      <RxExit className="h-6" />
      Sair
    </button>
  )
}
