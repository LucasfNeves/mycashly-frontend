import { useEffect, useState } from 'react'

interface DatePickerInputController {
  value: Date
  onChange: (date: Date) => void
}

export function useDataPickerInputController({
  value,
  onChange,
}: DatePickerInputController) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date())

  useEffect(() => {
    if (value !== selectedDate) {
      setSelectedDate(value)
    }
  }, [value, selectedDate])

  const handleDateChange = (date: Date) => {
    const dateString = date
    setSelectedDate(dateString)
    onChange(dateString)
  }

  return {
    selectedDate,
    handleDateChange,
  }
}
