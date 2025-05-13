import { Skeleton } from '../ui/skeleton'

export function SkeletonCard() {
  return (
    <section className="relative flex min-h-48 w-full min-w-56 flex-1 flex-col justify-between overflow-hidden rounded-md bg-darkBlue-700 p-5 lg:px-9 lg:py-5">
      <header className="flex flex-col gap-4">
        <Skeleton className="h-10 w-10 rounded-full bg-darkBlue-500" />
        <Skeleton className="h-14 w-3/4 bg-darkBlue-500" />
      </header>
      <Skeleton className="h-6 w-1/2 bg-darkBlue-500" />
    </section>
  )
}
