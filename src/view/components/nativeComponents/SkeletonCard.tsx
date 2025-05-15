export function SkeletonCard() {
  return (
    <section className="relative flex min-h-48 w-full min-w-56 flex-1 flex-col justify-between overflow-hidden rounded-md bg-darkBlue-700 p-5 lg:px-9 lg:py-5">
      <header className="flex flex-col gap-4">
        <span className="h-10 w-10 animate-pulse rounded-full bg-darkBlue-600" />
        <span className="h-14 w-3/4 animate-pulse rounded-md bg-darkBlue-600" />
      </header>
      <span className="h-6 w-1/2 animate-pulse rounded-md bg-darkBlue-600" />
    </section>
  )
}
