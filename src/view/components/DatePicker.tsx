import { ptBR } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'

interface CalendarModalProps {
  value: Date
  onChange?(date: Date): void
}

export function DatePicker({ value, onChange }: CalendarModalProps) {
  return (
    <>
      <DayPicker
        mode="single"
        selected={value}
        onSelect={(date) => onChange && onChange(date ?? new Date())}
        className="rounded-md p-2"
        locale={ptBR}
        classNames={{
          caption: 'flex items-center justify-between',
          nav: 'flex gap-1',
          nav_button_previous:
            'text-neutral-900 flex items-center justify-center !bg-transparent',
          nav_button_next:
            'text-neutral-900  flex items-center justify-center !bg-transparent',
          head_cell: 'uppercase text-xs text-neutral-900 font-medium pt-1 pb-2',
          button:
            'text-neutral-900 cursor-pointer w-10 h-10 hover:bg-neutral-300 rounded-full',
          day_today: 'bg-primaryBlue-200 font-bold text-gray-900',
          day_selected:
            '!bg-primaryBlue-500 text-white font-medium text-neutral-100',
        }}
      />
    </>
  )
}
