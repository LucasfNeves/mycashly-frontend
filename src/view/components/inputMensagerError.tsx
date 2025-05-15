import { CircleX } from 'lucide-react'

interface InputMensagerErrorProps {
  error: string | undefined
}

export function InputMensagerError({ error }: InputMensagerErrorProps) {
  return (
    <span className="flex items-center justify-start gap-2 text-xs text-red-400">
      <CircleX className="inline h-4 w-4" />
      <p>{error}</p>
    </span>
  )
}
