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
    <DropdownMenu open={open} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger
        className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-3 text-sm text-white transition-all hover:bg-blue-600 hover:duration-300"
        asChild
      >
        <button className="flex items-center justify-between gap-2">
          Nova Transação
          <PlusCircleIcon className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="left-0 z-10 min-w-[var(--radix-dropdown-menu-trigger-width)] rounded-2xl border border-gray-100 bg-white p-2 shadow-lg"
      >
        {TRANSACTION_TYPES.map((type) => (
          <DropdownMenuItem
            key={type.value}
            onClick={() => onSelect(type.value)}
            className="cursor-pointer rounded-lg px-4 py-3 text-sm text-gray-800 transition-colors hover:bg-gray-100 focus:border-none focus:bg-gray-100 focus:outline-none data-[highlighted]:bg-gray-100"
          >
            {type.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
