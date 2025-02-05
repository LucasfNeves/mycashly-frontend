import * as RdxDialog from '@radix-ui/react-dialog'
import { cn } from '@/app/lib/utils'
import { X } from 'lucide-react'

interface ModalProps {
  title: string
  children: React.ReactNode
  open?: boolean
  onClose: () => void
  rigthAction?: React.ReactNode
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
            'fixed inset-0 z-50 bg-darkBlue-800/80 backdrop-blur-sm',
            'data-[state=open]:animate-overlay-show',
          )}
        >
          <RdxDialog.Content className="absolute left-1/2 top-1/2 w-[90%] max-w-[400px] -translate-x-1/2 -translate-y-1/2 transform space-y-12 rounded-md bg-darkBlue-600 p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] lg:w-full">
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
                <button className="flex h-12 w-12 items-center justify-center text-red-500 transition-all hover:text-red-400 hover:duration-300">
                  {/*<Trash2Icon className="h-6 w-6" />*/}
                  {rigthAction}
                </button>
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
