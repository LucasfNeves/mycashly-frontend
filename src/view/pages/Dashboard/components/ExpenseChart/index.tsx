import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/view/shadCnComponents/ui/chart'

import { Bar, BarChart, XAxis, YAxis, LabelList } from 'recharts'

export const chartData = [
  { browser: 'Aluguel', valor: 275, fill: 'var(--color-Aluguel)' },
  { browser: 'Carro', valor: 200, fill: 'var(--color-Carro)' },
  { browser: 'Financiamento', valor: 187, fill: 'var(--color-Financiamento)' },
  { browser: 'Alimentação', valor: 173, fill: 'var(--color-Alimentação)' },
  { browser: 'Passeio', valor: 90, fill: 'var(--color-Passeio)' },
]

export const chartConfig = {
  valor: {
    label: 'Total em R$',
  },
  Aluguel: {
    label: 'Aluguel',
    color: 'hsl(var(--chart-1))',
  },
  Carro: {
    label: 'Carro',
    color: 'hsl(var(--chart-2))',
  },
  Financiamento: {
    label: 'Financ.',
    color: 'hsl(var(--chart-3))',
  },
  Alimentação: {
    label: 'Alim.',
    color: 'hsl(var(--chart-4))',
  },
  Passeio: {
    label: 'Passeio',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function ExpenseChart() {
  const truncateLabel = (label: string, maxLength: number) => {
    return label.length > maxLength ? `${label.slice(0, maxLength)}...` : label
  }
  return (
    <ChartContainer config={chartConfig} className="h-[90%] w-full">
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <YAxis dataKey="browser" type="category" hide />
        <XAxis dataKey="valor" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel
              className="border border-gray-300 bg-white text-black shadow-lg"
            />
          }
        />
        <Bar dataKey="valor" layout="vertical" radius={5}>
          <LabelList
            dataKey="browser"
            position="insideLeft"
            offset={8}
            fill="white"
            fontSize={12}
            formatter={(value: string) => truncateLabel(value, 8)}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
