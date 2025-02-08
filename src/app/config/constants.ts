import { TransactionDetailsProps } from '../types/transaction-details'

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
  } as TransactionDetailsProps,
  {
    id: '2',
    name: 'Salário',
    category: 'investment',
    date: '2025-01-04T23:11:01.677Z',
    type: 'income',
    value: 1.5,
  } as TransactionDetailsProps,
  {
    id: '3',
    name: 'Investimento',
    category: 'investment',
    date: '2025-01-04T23:11:01.677Z',
    type: 'investment',
    value: 500,
  } as TransactionDetailsProps,
  {
    id: '4',
    name: 'investment',
    category: 'Alimentação',
    date: '2025-01-04T23:11:01.677Z',
    type: 'expense',
    value: 110,
  } as TransactionDetailsProps,
]

export const USER = {
  id: '1',
  name: 'John Doe',
  email: 'teste@teste.com',
  password: '123456',
}
