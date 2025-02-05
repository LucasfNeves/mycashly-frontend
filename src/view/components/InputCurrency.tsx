import { NumericFormat } from 'react-number-format'

export function InputCurrency() {
  return (
    <NumericFormat
      thousandSeparator="."
      decimalSeparator=","
      defaultValue="0"
      className="w-full bg-transparent text-start text-[32px] font-bold tracking-[-1px] text-neutral-200 outline-none"
      maxLength={25}
    />
  )
}
