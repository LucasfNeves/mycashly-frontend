import { useEffect, useState } from 'react'

interface DatePickerInputController {
  value: string
  onChange: (date: string) => void
}

export function useDataPickerInputController({
  value,
  onChange,
}: DatePickerInputController) {
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

  return {
    selectedDate,
    handleDateChange,
  }
}
