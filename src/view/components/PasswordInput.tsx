import { ComponentProps, forwardRef, useState } from 'react'
import { cn } from '../../app/utils/cn'
import { Eye, EyeClosed } from 'lucide-react'
import { RxCrossCircled } from 'react-icons/rx'

interface InputProps extends ComponentProps<'input'> {
  name: string
  error?: string
  placeholder: string
  id?: string
  className?: string
  placeholderColor?: 'dark' | 'light'
}

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      name,
      id,
      className,
      error,
      placeholderColor,
      ...props
    }: InputProps,
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState('password')

    const handleShowPassword = () => {
      if (showPassword === 'password') {
        setShowPassword('text')
      } else {
        setShowPassword('password')
      }
    }

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
            placeholderColor === 'dark' &&
              'border-2 border-neutral-200 bg-transparent text-neutral-200',
          )}
          type={showPassword}
          {...props}
        />

        <label
          htmlFor="email"
          className={cn(
            'pointer-events-none absolute left-4 top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base',
            placeholderColor === 'light' ? 'text-gray-700' : 'text-gray-200',
          )}
        >
          {placeholder}
        </label>

        <button
          type="button"
          className={cn(
            'absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-700 transition-all',
            placeholderColor === 'light' ? 'text-gray-700' : 'text-gray-200',
          )}
          onClick={handleShowPassword}
        >
          {showPassword === 'password' ? (
            <EyeClosed size={24} />
          ) : (
            <Eye size={24} />
          )}
        </button>

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
