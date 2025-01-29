import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

interface ButtonNavigateProps {
  children: React.ReactNode
  to: string
  className?: string
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
          isActive
            ? 'flex h-10 w-full items-center gap-2 rounded-md bg-primaryBlue-500 p-3 text-white'
            : 'flex h-10 w-full items-center gap-2 rounded-md p-3 text-neutral-300',
          className,
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}
