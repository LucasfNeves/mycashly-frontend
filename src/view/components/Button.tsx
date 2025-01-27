import { ComponentProps } from 'react'
import { cn } from '../../app/utils/cn'
import { Spinner } from './Spinner'

interface ButtonProps extends ComponentProps<'button'> {
  className?: string
  disabled?: boolean
  children: string
  isLoading?: boolean
}

export function Button({
  children,
  className,
  disabled,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        'className={`flex hover:disabled:transition-none`} h-[3.25rem] items-center justify-center rounded-md bg-primaryBlue-500 font-medium text-white hover:bg-primaryBlue-600 hover:opacity-70 hover:transition-all hover:duration-300 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 hover:disabled:bg-gray-200 hover:disabled:opacity-100',
        className,
      )}
      {...props}
    >
      {isLoading ? <Spinner className="h-6 w-6" /> : children}
    </button>
  )
}
