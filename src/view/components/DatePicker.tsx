import { Calendar } from '@/components/ui/calendar'
import { ptBR } from 'date-fns/locale'

interface CalendarModalProps {
  value: Date
  onChange?(date: Date): void
}

export function DatePicker({ value, onChange }: CalendarModalProps) {
  return (
    <>
      <Calendar
        mode="single"
        selected={value}
        onSelect={(date) => onChange && onChange(date ?? new Date())}
        className="rounded-md border"
        locale={ptBR}
        classNames={{
          caption: 'flex items-center justify-between',
          nav: 'flex gap-1',
          nav_button_previous:
            'text-neutral-800 flex items-center justify-center !bg-transparent border-none',
          nav_button_next:
            'text-neutral-800 flex items-center justify-center !bg-transparent border-none',
          head_cell:
            'uppercase text-xs text-neutral-400 font-medium pt-1 pb-2 w-full',
          button: ' cursor-pointer w-10 h-10  hover:bg-neutral-100',
          day_today: 'bg-primaryBlue-100 font-bold hover:bg-primaryBlue-200',
          day_selected:
            'bg-primaryBlue-500 text-white hover:bg-primaryBlue-600 hover:text-white',
        }}
      />
    </>
  )
}
