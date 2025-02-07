import { DatePicker } from '../DatePicker'
import { forwardRef } from 'react'
import { formatDate } from '@/app/utils/formatDate'
import { useDataPickerInputController } from './useDatePickerInputController'
import { InputMensagerError } from '../inputMensagerError'
import { Popover } from '../Popover'
import { cn } from '@/app/utils/cn'

interface DatePickerInputProps {
  className?: string
  value: string
  onChange: (date: string) => void
  error?: string
}

export const DatePickerInput = forwardRef<
  HTMLButtonElement,
  DatePickerInputProps
>(({ value, onChange, error }, ref) => {
  const { handleDateChange, selectedDate } = useDataPickerInputController({
    value,
    onChange,
  })

  return (
    <div className="relative flex flex-col gap-2">
      <Popover.Root>
        <Popover.Trigger>
          <button
            ref={ref}
            className={cn(
              'relative h-[3.25rem] rounded-lg border-2 border-neutral-200 bg-transparent px-[12px] pb-[2px] pt-5 text-start text-neutral-200 outline-none placeholder-shown:pt-0',
            )}
          >
            <span className="pointer-events-none absolute left-4 top-2 text-xs text-neutral-200 transition-all">
              Data
            </span>

            <span>{formatDate(new Date(selectedDate))}</span>
          </button>
        </Popover.Trigger>
        <Popover.Content side="top" className="w-fit border-none bg-white p-0">
          <DatePicker
            value={new Date(selectedDate)}
            onChange={(date) => {
              handleDateChange(date)
            }}
          />
        </Popover.Content>
      </Popover.Root>

      {error && <InputMensagerError error={error} />}
    </div>
  )
})
