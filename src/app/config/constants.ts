export const MONTHS = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
]

export const TYPES = [
  { value: 'INCOME', label: 'Receita' },
  { value: 'EXPENSE', label: 'Despesa' },
  { value: 'INVESTMENT', label: 'Investimento' },
]

export const TRANSACTION_TYPES = [
  { label: 'Receita', value: 'INCOME' },
  { label: 'Investimento', value: 'INVESTMENT' },
  { label: 'Despesa', value: 'EXPENSE' },
] as const
