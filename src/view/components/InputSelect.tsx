import { ChevronDownIcon } from 'lucide-react'
import * as RdxSelect from '@radix-ui/react-select'
import { cn } from '@/app/lib/utils'
import { forwardRef } from 'react'

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
    }: InputSelectProps,
    ref,
  ) => {
    function handleSelected(value: string) {
      onChange(value)
    }

    return (
      <div className="relative w-full">
        <label
          className={cn(
            'pointer-events-none absolute left-4 top-1/2 z-[50] -translate-y-1/2 text-gray-700',
            value && 'left-[13px] top-2 translate-y-0 text-xs transition-all',
            placeholderColor === 'light' ? 'text-gray-700' : 'text-gray-200',
          )}
        >
          {placeholder}
        </label>

        <RdxSelect.Root value={value} onValueChange={handleSelected}>
          <RdxSelect.Trigger
            ref={ref}
            className={cn(
              'relative h-[3.25rem] w-full overflow-hidden rounded-lg border border-gray-300 bg-white px-2.5 py-5 text-left text-gray-700 outline-none transition-all focus:border-gray-500',
              className || '',
            )}
          >
            <RdxSelect.Value>{value}</RdxSelect.Value>
            <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
              <ChevronDownIcon
                className={cn(
                  'h-6 w-6 text-gray-800',
                  placeholderColor === 'light'
                    ? 'text-gray-700'
                    : 'text-gray-200',
                )}
              />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content
              className="z-[999] w-[var(--radix-select-trigger-width)] rounded-2xl border border-gray-100 bg-white shadow-lg"
              position="popper"
            >
              <RdxSelect.Viewport className="p-2">
                {options.map((option) => (
                  <RdxSelect.Item
                    key={option.value}
                    value={option.value}
                    className="rounded-lg p-2 text-sm text-gray-800 outline-none transition-colors data-[highlighted]:bg-gray-100 data-[state=checked]:font-bold"
                  >
                    <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>
    )
  },
)
