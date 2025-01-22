import { ComponentProps } from 'react'
import { cn } from '../../app/utils/cn'

interface ButtonProps extends ComponentProps<'button'> {
  className?: string
  disabled?: boolean
  children: string
}

export function Button({ children, className, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        'h-[3.25rem] rounded-md bg-primaryBlue-500 text-white hover:opacity-70 hover:transition-all hover:duration-300 disabled:cursor-not-allowed disabled:bg-primaryBlue-100 disabled:text-gray-600',
        className,
      )}
    >
      {children}
    </button>
  )
}
