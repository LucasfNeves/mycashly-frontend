import { Skeleton } from '../ui/skeleton'

export function SkeletonChart() {
  return (
    <div className="w-full space-y-4">
      <Skeleton className="h-16 w-1/3 bg-darkBlue-600" />
      <Skeleton className="h-52 w-full rounded-md bg-darkBlue-600" />
    </div>
  )
}
