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

interface PopupAlertProps {
  triggerText?: string
  triggerIcon?: React.ReactNode
  title: string
  description: string
  actionText: string
  className?: string
}

export function PopupAlert({
  actionText,
  description,
  title,
  triggerText,
  triggerIcon,
  className,
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
      <AlertDialogContent className="border-none bg-darkBlue-500 text-neutral-200">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none bg-green-700 text-white transition-all hover:bg-green-800 hover:duration-300">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction className="border-none bg-red-600 text-white transition-all hover:bg-red-700 hover:duration-300">
            {actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
