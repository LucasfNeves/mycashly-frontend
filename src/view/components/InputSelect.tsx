import { ChevronDownIcon } from 'lucide-react'
import * as RdxSelect from '@radix-ui/react-select'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface InputSelectProps {
  className?: string
  error?: string
  placeholder?: string
  placeholderColor?: 'dark' | 'light'
  options: {
    value: string
    label: string
  }[]
}

export function InputSelect({
  placeholder,
  className,
  options,
  placeholderColor = 'light',
}: InputSelectProps) {
  const [selectedValue, setSelectedValue] = useState('')

  function handleSelected(value: string) {
    setSelectedValue(value)
  }

  return (
    <div className="relative w-full">
      <label
        className={cn(
          'pointer-events-none absolute left-4 top-1/2 z-[50] -translate-y-1/2 text-gray-700',
          selectedValue &&
            'left-[13px] top-2 translate-y-0 text-xs transition-all',
          placeholderColor === 'light' ? 'text-gray-700' : 'text-gray-200',
        )}
      >
        {placeholder}
      </label>

      <RdxSelect.Root value={selectedValue} onValueChange={handleSelected}>
        <RdxSelect.Trigger
          className={cn(
            'relative h-[3.25rem] w-full rounded-lg border border-gray-300 bg-white p-4 text-left text-gray-700 outline-none transition-all focus:border-gray-500',
            className || '',
          )}
        >
          <RdxSelect.Value />
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
}
