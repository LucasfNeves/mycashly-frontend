import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shadCnComponents/ui/chart'

import { Bar, BarChart, XAxis, YAxis } from 'recharts'

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
    label: 'aluguel',
    color: 'hsl(var(--chart-1))',
  },
  Carro: {
    label: 'carro',
    color: 'hsl(var(--chart-2))',
  },
  Financiamento: {
    label: 'financiamento',
    color: 'hsl(var(--chart-3))',
  },
  Alimentação: {
    label: 'alimentação',
    color: 'hsl(var(--chart-4))',
  },
  Passeio: {
    label: 'passeio',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function ExpenseChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          left: 0,
        }}
      >
        <YAxis
          dataKey="browser"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
          tick={{ fill: '#A3ABB2', fontSize: 12 }}
        />
        <XAxis dataKey="valor" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="valor" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  )
}
