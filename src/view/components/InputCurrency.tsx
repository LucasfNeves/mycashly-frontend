import { NumericFormat } from 'react-number-format'

interface InputCurrencyProps {
  value: number | undefined

  onChange: (value: number) => void

  onBlur?: () => void

  name: string

  ref: React.Ref<HTMLInputElement>
}

import React, { forwardRef } from 'react'

export const InputCurrency = forwardRef<HTMLInputElement, InputCurrencyProps>(
  ({ value, name, onChange }, ref) => {
    return (
      <NumericFormat
        value={value}
        onValueChange={({ floatValue }) =>
          floatValue !== undefined && onChange(floatValue)
        }
        name={name}
        getInputRef={ref}
        thousandSeparator="."
        decimalSeparator=","
        className="w-full bg-transparent text-start text-[32px] font-bold tracking-[-1px] text-neutral-200 outline-none"
      />
    )
  },
)
