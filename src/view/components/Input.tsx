import { ComponentProps, forwardRef } from 'react'
import { cn } from '../../app/utils/cn'
import { RxCrossCircled } from 'react-icons/rx'

interface InputProps extends ComponentProps<'input'> {
  name: string
  error?: string
  placeholder: string
  id?: string
  className?: string
  type: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, name, id, className, type, error, ...props }: InputProps,
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
            'peer relative h-[3.25rem] w-full rounded-lg border px-[12px] pb-[2px] pt-4 text-black outline-none placeholder-shown:pt-0',
            className,
          )}
          type={type}
          {...props}
        />

        <label
          htmlFor="email"
          className="pointer-events-none absolute left-4 top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
        >
          {placeholder}
        </label>

        {error && (
          <span className="flex items-center justify-start gap-2 text-xs text-red-400">
            <RxCrossCircled className="inline h-4 w-4" />
            <p>{error}</p>
          </span>
        )}
      </div>
    )
  },
)
