import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { DatePicker } from './DatePicker'
import { forwardRef, useEffect, useState } from 'react'
import { formatDate } from '@/app/utils/formatDate'

interface DatePickerInputProps {
  className?: string
  value: string
  onChange: (date: string) => void
}

export const DatePickerInput = forwardRef<
  HTMLButtonElement,
  DatePickerInputProps
>(({ value, onChange }, ref) => {
  const [selectedDate, setSelectedDate] = useState<string>(
    value || new Date().toISOString(),
  )

  useEffect(() => {
    if (value !== selectedDate) {
      setSelectedDate(value)
    }
  }, [value, selectedDate])

  const handleDateChange = (date: Date) => {
    const dateString = date.toISOString()
    setSelectedDate(dateString)
    onChange(dateString)
  }

  return (
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
  )
})
