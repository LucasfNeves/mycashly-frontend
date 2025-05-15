import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/view/components/ui/chart'

import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import { useExpenseChartController } from './useExpenseChartController'
import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { formatCurrency } from '@/app/utils/formatCurrency'

interface ExpenseChartProps {
  topFiveExpenses: TransactionDetails[]
}

export function ExpenseChart({ topFiveExpenses }: ExpenseChartProps) {
  const { chartConfig, chartData } = useExpenseChartController({
    topFiveExpenses,
  })

  const truncateLabel = (label: string, maxLength: number) => {
    return label.length > maxLength ? `${label.slice(0, maxLength)}...` : label
  }

  return (
    <ChartContainer config={chartConfig} className="h-[90%] w-full">
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          left: 10,
          right: 10,
        }}
      >
        <YAxis
          dataKey="browser"
          type="category"
          orientation="left"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: unknown) =>
            String(
              truncateLabel(
                String(
                  chartConfig[value as keyof typeof chartConfig]?.label || '',
                ),
                8,
              ) || '',
            )
          }
        />
        <XAxis dataKey="valor" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel
              formatter={(value: unknown) => formatCurrency(Number(value))}
              className="border border-gray-300 bg-white text-black shadow-lg"
            />
          }
        />

        <Bar dataKey="valor" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  )
}
