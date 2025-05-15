import { DatePicker } from '../DatePicker'
import { forwardRef } from 'react'
import { formatDate } from '@/app/utils/formatDate'
import { useDataPickerInputController } from './useDatePickerInputController'
import { InputMensagerError } from '../inputMensagerError'

import { cn } from '@/app/utils/cn'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@radix-ui/react-popover'

interface DatePickerInputProps {
  className?: string
  value: Date
  onChange: (date: Date) => void
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
    <div className="relative flex w-full flex-col gap-2">
      <Popover>
        <PopoverTrigger
          ref={ref}
          className={cn(
            'relative h-[3.25rem] w-full rounded-lg border-2 border-neutral-200 bg-transparent px-[12px] pb-[2px] pt-5 text-start text-neutral-200 outline-none placeholder-shown:pt-0',
          )}
        >
          <span className="pointer-events-none absolute left-4 top-2 text-xs text-neutral-200 transition-all">
            Data
          </span>

          <span>{formatDate(new Date(selectedDate))}</span>
        </PopoverTrigger>
        <PopoverContent side="top" className="w-fit border-none bg-white p-0">
          <DatePicker
            value={new Date(selectedDate)}
            onChange={(date) => {
              handleDateChange(date)
            }}
          />
        </PopoverContent>
      </Popover>

      {error && <InputMensagerError error={error} />}
    </div>
  )
})
