import { cn } from '@/app/lib/utils'
import { PopupAlert } from './PopupAlert'
import { X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

interface ModalProps {
  title?: string
  children: React.ReactNode
  open?: boolean
  onClose: () => void
  rigthAction?: {
    actionText: string
    description: string
    title: string
    triggerText?: string
    triggerIcon?: React.ReactNode
    handleAction?: () => void
    isLoading?: boolean
  }
  className?: string
}

export function Modal({
  title,
  children,
  open,
  onClose,
  rigthAction,
  className,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        aria-describedby=""
        className={cn(
          'w-[90%] max-w-[400px] space-y-6 overflow-y-auto rounded-md border-none bg-darkBlue-600 p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] lg:w-full',
          className,
        )}
      >
        <header className="flex items-center justify-between">
          <DialogClose className="flex h-12 w-12 items-center justify-center text-white transition-all hover:text-neutral-300 hover:duration-300">
            <X className="h-6 w-6" />
          </DialogClose>
          <DialogTitle className="text-md w-full flex-1 text-center text-white">
            {title}
          </DialogTitle>

          {rigthAction ? (
            <PopupAlert
              isLoading={rigthAction.isLoading}
              handleAction={rigthAction.handleAction}
              actionText={rigthAction.actionText}
              description={rigthAction.description}
              title={rigthAction.title}
              triggerText={rigthAction.triggerText}
              triggerIcon={rigthAction.triggerIcon}
              onCloseModalMain={onClose}
            />
          ) : (
            <div className="w-12" />
          )}
        </header>

        <main>{children}</main>
      </DialogContent>
    </Dialog>
  )
}
