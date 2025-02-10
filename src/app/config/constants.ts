import { TransactionDetails } from '../entities/TransactionDetails'

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

export const transactionsMocked = [
  {
    id: '1',
    name: 'Restaurante',
    category: 'investment',
    date: '2025-01-04T23:11:01.677Z',
    type: 'expense',
    value: 110,
  } as TransactionDetails,
  {
    id: '2',
    name: 'Salário',
    category: 'investment',
    date: '2025-01-04T23:11:01.677Z',
    type: 'income',
    value: 1.5,
  } as TransactionDetails,
  {
    id: '3',
    name: 'Investimento',
    category: 'investment',
    date: '2025-01-04T23:11:01.677Z',
    type: 'investment',
    value: 500,
  } as TransactionDetails,
  {
    id: '4',
    name: 'investment',
    category: 'Alimentação',
    date: '2025-01-04T23:11:01.677Z',
    type: 'expense',
    value: 110,
  } as TransactionDetails,
]
