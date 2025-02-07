import * as RdxDialog from '@radix-ui/react-dialog'
import { cn } from '@/app/lib/utils'
import { PopupAlert } from './PopupAlert'
import { X } from 'lucide-react'

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
  }
}

export function Modal({
  title,
  children,
  open,
  onClose,
  rigthAction,
}: ModalProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            'fixed inset-0 z-40 overflow-y-auto bg-darkBlue-800/80 backdrop-blur-sm transition-all duration-300',
            'data-[state=open]:animate-overlay-show',
          )}
        >
          <RdxDialog.Content className="absolute left-1/2 top-1/2 z-50 w-[90%] max-w-[400px] -translate-x-1/2 -translate-y-1/2 transform space-y-12 overflow-y-auto rounded-md bg-darkBlue-600 p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] lg:w-full">
            <header className="flex items-center justify-between">
              <RdxDialog.Close asChild>
                <button className="flex h-12 w-12 items-center justify-center text-white transition-all hover:text-neutral-300 hover:duration-300">
                  <X className="h-6 w-6" />
                </button>
              </RdxDialog.Close>
              <RdxDialog.Title className="text-md w-full flex-1 text-center text-white">
                {title}
              </RdxDialog.Title>

              {rigthAction ? (
                <PopupAlert
                  actionText={rigthAction.actionText}
                  description={rigthAction.description}
                  title={rigthAction.title}
                  triggerText={rigthAction.triggerText}
                  triggerIcon={rigthAction.triggerIcon}
                />
              ) : (
                <div className="w-12" />
              )}
            </header>

            <main>{children}</main>
          </RdxDialog.Content>
        </RdxDialog.Overlay>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  )
}
