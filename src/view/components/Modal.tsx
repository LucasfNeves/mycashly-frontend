import { cn } from '@/app/lib/utils'
import { PopupAlert } from './PopupAlert'
import { X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

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
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Overlay className="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-50 h-screen bg-black/50 backdrop-blur-sm" />

      <Dialog.Portal>
        <Dialog.Content
          aria-describedby=""
          className={cn(
            'fixed inset-0 m-auto h-fit w-[90%] max-w-[400px] space-y-6 overflow-y-auto rounded-md border-none bg-darkBlue-600 p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
            'data-[state=closed]:animate-slideDown data-[state=open]:animate-slideUp',
            className,
          )}
        >
          <header className="flex items-center justify-between">
            <Dialog.Close className="flex h-12 w-12 items-center justify-center text-white transition-all hover:text-neutral-300 hover:duration-300">
              <X className="h-6 w-6" />
            </Dialog.Close>
            <Dialog.Title className="text-md w-full flex-1 text-center text-white">
              {title}
            </Dialog.Title>

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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
