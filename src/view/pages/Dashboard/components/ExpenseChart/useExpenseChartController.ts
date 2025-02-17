import { TransactionDetails } from '@/app/entities/TransactionDetails'
import { ChartConfig } from '@/components/ui/chart'

interface useExpenseChartControllerProps {
  topFiveExpenses: TransactionDetails[]
}

export function useExpenseChartController({
  topFiveExpenses = [],
}: useExpenseChartControllerProps) {
  const defaultExpense = { name: 'Desconhecido', value: 0 }

  const chartData = topFiveExpenses.slice(0, 5).map((expense) => {
    const [name] = expense?.name?.trim().split(' ') || defaultExpense.name
    return {
      browser: name,
      valor: expense?.value || defaultExpense.value,
      fill: `var(--color-${name || 'default'})`,
    }
  })

  const chartConfig = topFiveExpenses.reduce(
    (
      acc: { [key: string]: { label: string; color?: string } },
      expense,
      index,
    ) => {
      const [name] = expense?.name?.trim().split(' ') || defaultExpense.name
      acc[name] = {
        label: name,
        color: `hsl(var(--chart-${index + 1}))`,
      }
      return acc
    },
    {
      valor: {
        label: 'Total',
      },
    },
  ) as ChartConfig

  return {
    chartData,
    chartConfig,
  }
}
