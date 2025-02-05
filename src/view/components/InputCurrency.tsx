import { NumericFormat } from 'react-number-format'

interface InputCurrencyProps {
  value?: number
}

export function InputCurrency({ value }: InputCurrencyProps) {
  return (
    <NumericFormat
      thousandSeparator="."
      decimalSeparator=","
      defaultValue={value !== undefined ? value : 0}
      className="w-full bg-transparent text-start text-[32px] font-bold tracking-[-1px] text-neutral-200 outline-none"
      maxLength={25}
    />
  )
}
