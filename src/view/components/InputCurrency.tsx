import { NumericFormat } from 'react-number-format'
import React, { forwardRef } from 'react'
import { InputMensagerError } from './inputMensagerError'

interface InputCurrencyProps {
  value: number | undefined

  onChange: (value: number) => void

  onBlur?: () => void

  name: string

  ref: React.Ref<HTMLInputElement>

  error?: string
}

export const InputCurrency = forwardRef<HTMLInputElement, InputCurrencyProps>(
  ({ value, name, onChange, error }, ref) => {
    return (
      <div className="relative flex w-full flex-col gap-2">
        <NumericFormat
          value={value ?? 0}
          onValueChange={({ floatValue }) => onChange(floatValue ?? 0)}
          name={name}
          getInputRef={ref}
          thousandSeparator="."
          decimalSeparator=","
          className="h-[3.25rem] w-full bg-transparent text-start text-[32px] font-bold tracking-[-1px] text-neutral-200 outline-none"
        />

        <div className="absolute bottom-[-0.8rem] left-[-28px]">
          {error && <InputMensagerError error={error} />}
        </div>
      </div>
    )
  },
)
