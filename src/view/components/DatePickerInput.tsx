import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { DatePicker } from './DatePicker'
import { useState } from 'react'
import { formatDate } from '@/app/utils/formatDate'

interface DatePickerInputProps {
  date?: string
}

export function DatePickerInput({ date }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(
    date ? new Date(date) : new Date(),
  )

  return (
    <Popover>
      <PopoverTrigger className="relative flex flex-col gap-2">
        <div className="relative h-[3.25rem] w-full rounded-lg border-2 border-neutral-200 bg-transparent px-[12px] pb-[2px] pt-5 text-start text-neutral-200 outline-none placeholder-shown:pt-0">
          {formatDate(selectedDate)}
        </div>

        <label
          htmlFor=""
          className="pointer-events-none absolute left-4 top-2 text-xs text-neutral-200 transition-all"
        >
          Data
        </label>
      </PopoverTrigger>
      <PopoverContent className="w-fit border-none bg-white p-0">
        <DatePicker
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </PopoverContent>
    </Popover>
  )
}
