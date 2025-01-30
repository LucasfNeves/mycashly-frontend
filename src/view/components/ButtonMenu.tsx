import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

interface ButtonMenuProps {
  title: string
  open: boolean
  setOpen: (open: boolean) => void
}

export function ButtonMenu({
  title,
  open,
  setOpen,
  ...props
}: ButtonMenuProps) {
  const toggleMenu = () => setOpen(!open)

  return (
    <button
      className={cn('z-50', open ? 'absolute right-2' : 'relative')}
      title={title}
      onClick={toggleMenu}
      {...props}
    >
      {!open ? (
        <Menu className="h-8 text-white" />
      ) : (
        <X className="h-10 text-neutral-200" />
      )}
    </button>
  )
}
