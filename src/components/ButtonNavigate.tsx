import { cn } from '@/app/lib/utils'
import { NavLink } from 'react-router-dom'

interface ButtonNavigateProps {
  children: React.ReactNode
  to: string
  className?: string
  onClick?: () => void
}

export function ButtonNavigate({
  children,
  to,
  className,
  ...props
}: ButtonNavigateProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        cn(
          'transition-colors duration-300',
          isActive
            ? 'flex h-10 w-full items-center gap-2 rounded-md bg-primaryBlue-500 p-3 text-white transition-all hover:bg-primaryBlue-600 hover:duration-300'
            : 'flex h-10 w-full items-center gap-2 rounded-md p-3 text-neutral-300 transition-all hover:bg-darkBlue-600 hover:duration-300',
          className,
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}
