import { useAuth } from '@/app/hooks/contexts/useAuth'
import { LogOut } from 'lucide-react'

export function ExitButton() {
  const { signOut } = useAuth()

  return (
    <button
      onClick={signOut}
      className="flex items-center gap-2 text-sm text-white transition-all hover:text-red-400 hover:duration-300"
    >
      <LogOut className="h-5 w-5" />
      Sair
    </button>
  )
}
