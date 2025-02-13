import { cn } from '@/app/utils/cn'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Spinner } from './Spinner'

interface PopupAlertProps {
  triggerText?: string
  triggerIcon?: React.ReactNode
  title: string
  description: string
  actionText: string
  className?: string
  handleAction?: () => void
  isLoading?: boolean
  onCloseModalMain: () => void
}

export function PopupAlert({
  actionText,
  description,
  title,
  triggerText,
  triggerIcon,
  className,
  handleAction,
  isLoading,
  onCloseModalMain,
}: PopupAlertProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={cn(
          'h-12 text-red-500 transition-all hover:text-red-600 hover:duration-300',
          className,
        )}
      >
        {triggerText} {triggerIcon}
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] rounded-md border-none bg-darkBlue-500 text-neutral-200 lg:w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-neutral-300">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={onCloseModalMain}
            className="border-none bg-red-600 text-neutral-200 transition-all hover:bg-red-700 hover:text-neutral-200 hover:duration-300"
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleAction}
            className="flex items-center justify-center border-none bg-green-700 text-neutral-200 transition-all hover:bg-green-800 hover:text-neutral-200 lg:w-1/3"
          >
            {isLoading ? <Spinner className="h-4 w-4" /> : actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
