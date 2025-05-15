import { TRANSACTION_TYPES } from '@/app/config/constants'
import { TransactionType } from '@/app/types/transaction-type'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { PlusCircleIcon } from 'lucide-react'

interface TransactionDropdownMenuProps {
  onSelect: (type: TransactionType) => void
  open?: boolean
  setMenuOpen: (open: boolean) => void
}

export function TransactionDropdownMenu({
  onSelect,
  open,
  setMenuOpen,
}: TransactionDropdownMenuProps) {
  return (
    <DropdownMenu open={open} onOpenChange={(open) => setMenuOpen(open)}>
      <DropdownMenuTrigger
        className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-3 text-sm text-white transition-all hover:bg-blue-600 hover:duration-300"
        asChild
      >
        <button className="flex items-center justify-between gap-2">
          Nova Transação
          <PlusCircleIcon className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {TRANSACTION_TYPES.map((type) => (
          <DropdownMenuItem
            key={type.value}
            onClick={() => onSelect(type.value)}
          >
            {type.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
