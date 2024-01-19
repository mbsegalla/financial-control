export const paymentMethodsOptions = [
  { value: 'credit', label: 'Crédito' },
  { value: 'debit', label: 'Débito' },
  { value: 'money', label: 'Dinheiro' },
  { value: 'pix', label: 'Pix' },
  { value: 'ticket', label: 'Vale alimentação' },
  { value: 'other', label: 'Outro' },
]

export const expenseCategories = [
  { value: 'food', label: 'Alimentação' },
  { value: 'transport', label: 'Transporte' },
  { value: 'health', label: 'Saúde' },
  { value: 'entertainment', label: 'Entretenimento' },
  { value: 'education', label: 'Educação' },
  { value: 'other', label: 'Outro' },
]

export const numberOfInstallments = new Array(24).fill(0).map((_, index) => ({
  value: index + 1,
  label: `${index + 1}x`,
}))
