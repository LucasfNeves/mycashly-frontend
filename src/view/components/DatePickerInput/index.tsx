import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { DatePicker } from '../DatePicker'
import { forwardRef } from 'react'
import { formatDate } from '@/app/utils/formatDate'
import { useDataPickerInputController } from './useDatePickerInputController'
import { InputMensagerError } from '../inputMensagerError'

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
    <div className="relative flex w-full flex-col gap-2">
      <Popover>
        <PopoverTrigger
          className="relative flex flex-col gap-2 overflow-hidden"
          ref={ref}
        >
          <div className="relative h-[3.25rem] w-full rounded-lg border-2 border-neutral-200 bg-transparent px-[12px] pb-[2px] pt-5 text-start text-neutral-200 outline-none placeholder-shown:pt-0">
            {formatDate(new Date(selectedDate))}
          </div>

          <label className="pointer-events-none absolute left-4 top-2 text-xs text-neutral-200 transition-all">
            Data
          </label>
        </PopoverTrigger>
        <PopoverContent className="w-fit border-none bg-white p-0">
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
