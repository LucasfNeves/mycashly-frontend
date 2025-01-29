import { Settings2 } from 'lucide-react'

export function UserSettingsButton() {
  return (
    <button className="flex min-w-32 max-w-52 items-center gap-3 rounded-full bg-darkBlue-800 p-2 text-white transition-all hover:bg-darkBlue-700 hover:duration-300">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primaryBlue-500">
        LF
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <span className="w-full truncate text-start text-sm font-medium">
          Lucas
        </span>
        <small className="w-full truncate text-start text-xs text-gray-400">
          lucasfarias.ln@gmail.com
        </small>
      </div>

      <Settings2 className="h-6 flex-shrink-0 text-primaryBlue-500" />
    </button>
  )
}
