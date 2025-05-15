import { ComponentProps, forwardRef } from 'react'
import { cn } from '../app/utils/cn'
import { InputMensagerError } from './inputMensagerError'

interface InputProps extends ComponentProps<'input'> {
  name: string
  error?: string
  placeholder: string
  id?: string
  className?: string
  type: string
  placeholderColor?: 'dark' | 'light'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      name,
      id,
      className,
      type,
      error,
      placeholderColor = 'light',
      ...props
    }: InputProps,
    ref,
  ) => {
    const inputId = id ?? name

    return (
      <div className="relative flex flex-col gap-2">
        <input
          id={inputId}
          name={name}
          ref={ref}
          placeholder=" "
          className={cn(
            'peer relative h-[3.25rem] w-full rounded-lg px-[12px] pb-[2px] pt-4 text-black outline-none placeholder-shown:pt-0',
            className || '',
            placeholderColor === 'dark' &&
              'border-2 border-neutral-200 bg-transparent text-neutral-200',
          )}
          type={type}
          {...props}
        />

        <label
          htmlFor={inputId}
          className={cn(
            'pointer-events-none absolute left-4 top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base',
            placeholderColor === 'light' ? 'text-gray-700' : 'text-gray-200',
          )}
        >
          {placeholder}
        </label>

        {error && <InputMensagerError error={error} />}
      </div>
    )
  },
)
