import * as RdxPopover from '@radix-ui/react-popover'
import { cn } from '../../../app/utils/cn'

export function PopoverRoot({ children }: { children: React.ReactNode }) {
  return <RdxPopover.Root>{children}</RdxPopover.Root>
}

export function PopoverRTrigger({ children }: { children: React.ReactNode }) {
  return <RdxPopover.Trigger asChild>{children}</RdxPopover.Trigger>
}

interface PopoverContentProps {
  children: React.ReactNode
  className?: string
  side: 'left' | 'right' | 'top' | 'bottom'
}

export function PopoverContent({
  children,
  className,
  side,
}: PopoverContentProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        side={side}
        className={cn(
          'z-[99] space-y-2 rounded-2xl bg-white p-4 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          'data-[side=bottom]:animate-slide-up-and-fade',
          'data-[side=top]:animate-slide-down-and-fade',
          className,
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  )
}
