import { cn } from '@/app/lib/utils'
import { forwardRef } from 'react'
import { InputMensagerError } from '../inputMensagerError'
import { Select } from 'radix-ui'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { SelectItem } from './components/SelectItem'

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
              isLoading && 'cursor-not-allowed opacity-50',
            )}
          >
            {isLoading ? 'Carregando....' : placeholder}
          </label>

          <Select.Root value={value} onValueChange={onChange}>
            <Select.Trigger
              disabled={isLoading}
              ref={ref}
              aria-label={`Selecione a(o) ${placeholder}`}
              className={cn(
                'relative flex h-[3.25rem] w-full items-start justify-between overflow-hidden rounded-lg border border-gray-300 bg-white px-2.5 py-5 text-left text-gray-700 outline-none transition-all focus:border-gray-500',
                className || '',
                isLoading && 'cursor-not-allowed opacity-50',
              )}
            >
              <Select.Value
                className={cn(
                  'text-gray-700',
                  value && 'text-gray-700',
                  placeholderColor === 'light'
                    ? 'text-gray-700'
                    : 'text-gray-200',
                )}
              >
                {value
                  ? options.find((option) => option.value === value)?.label
                  : ''}
              </Select.Value>

              <Select.Icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200">
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content
                className="left-0 w-[var(--radix-select-trigger-width)] rounded-md border border-gray-100 bg-white shadow-lg"
                position="popper"
                side="bottom"
                align="start"
              >
                <Select.ScrollUpButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
                  <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-[5px]">
                  <Select.Group>
                    {options.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="rounded-lg p-2 text-sm text-gray-800 outline-none transition-colors data-[highlighted]:bg-gray-100 data-[state=checked]:font-bold"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
        {error && <InputMensagerError error={error} />}
      </div>
    )
  },
)
