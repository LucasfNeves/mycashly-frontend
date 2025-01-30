interface SummaryCardProps {
  icon: React.ReactNode
  value: string
  description: string
}

export function SummaryCard({ icon, value, description }: SummaryCardProps) {
  return (
    <section className="flex min-h-48 w-full min-w-56 flex-1 flex-col justify-between rounded-md bg-darkBlue-700 p-5 lg:px-9 lg:py-5">
      <header className="flex flex-col gap-4">
        <div>{icon}</div>

        <h2 className="text-neutral-300">{description}</h2>
      </header>

      <p className="w-full overflow-hidden truncate whitespace-nowrap text-2xl font-bold text-white">
        {value}
      </p>
    </section>
  )
}
