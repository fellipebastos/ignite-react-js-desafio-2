export const PAYMENT_OPTIONS = {
  cash: 'Dinheiro',
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
}

export type PaymentTypes = keyof typeof PAYMENT_OPTIONS
