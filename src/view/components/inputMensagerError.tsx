import { RxCrossCircled } from 'react-icons/rx'

export function inputMensagerError(error: string) {
  return (
    <span className="flex items-center justify-start gap-2 text-xs text-red-400">
      <RxCrossCircled className="inline h-4 w-4" />
      <p>{error}</p>
    </span>
  )
}
