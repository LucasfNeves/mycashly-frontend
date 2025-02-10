import { cn } from '@/app/lib/utils'
import { forwardRef } from 'react'
import { InputMensagerError } from './inputMensagerError'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Spinner } from './Spinner'

interface InputSelectProps {
  className?: string
  error?: string
  placeholder?: string
  placeholderColor?: 'dark' | 'light'
  options: {
    value: string
    label: string
  }[]
  value: string
  onChange: (value: string) => void
  isLoading?: boolean
}

export const InputSelect = forwardRef<HTMLButtonElement, InputSelectProps>(
  (
    {
      placeholder,
      placeholderColor = 'light',
      options,
      value,
      onChange,
      className,
      error,
      isLoading,
    }: InputSelectProps,
    ref,
  ) => {
    return (
      <div className="flex w-full flex-col gap-2">
        <div className="relative w-full">
          <label
            className={cn(
              'pointer-events-none absolute left-4 top-1/2 z-[50] -translate-y-1/2 text-gray-700',
              value && 'left-[13px] top-2 translate-y-0 text-xs transition-all',
              placeholderColor === 'light' ? 'text-gray-700' : 'text-gray-200',
              isLoading && 'flex w-full items-center justify-center',
            )}
          >
            {isLoading ? (
              <div className="absolute inset-0 right-4 flex items-center justify-center">
                <Spinner className="h-6 w-6" />
              </div>
            ) : (
              placeholder
            )}
          </label>

          <Select value={value} onValueChange={onChange}>
            <SelectTrigger
              disabled={isLoading}
              ref={ref}
              className={cn(
                'relative h-[3.25rem] w-full overflow-hidden rounded-lg border border-gray-300 bg-white px-2.5 py-5 text-left text-gray-700 outline-none transition-all focus:border-gray-500',
                className || '',
                isLoading && 'cursor-not-allowed',
              )}
            >
              <SelectValue>
                {options.find((option) => option.value === value)?.label || ''}
              </SelectValue>
            </SelectTrigger>

            <SelectContent className="rounded-2xl border border-gray-100 bg-white shadow-lg">
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="rounded-lg p-2 text-sm text-gray-800 outline-none transition-colors data-[highlighted]:bg-gray-100 data-[state=checked]:font-bold"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {error && <InputMensagerError error={error} />}
      </div>
    )
  },
)
