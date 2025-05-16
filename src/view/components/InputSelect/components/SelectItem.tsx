import classnames from 'classnames'
import * as React from 'react'
import * as Select from '@radix-ui/react-select'
import { CheckIcon } from '@radix-ui/react-icons'

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof Select.Item> {
  children: React.ReactNode
  className?: string
}

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        'relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] p-2 pl-[35px] pr-[25px] text-sm leading-none text-gray-800 outline-none transition-colors data-[highlighted]:bg-gray-100 data-[state=checked]:font-bold',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})
