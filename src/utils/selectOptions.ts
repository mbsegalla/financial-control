export const expenseTypes = [
  {
    value: 'marketplace',
    label: 'Mercado',
  },
  {
    value: 'Ifood',
    label: 'Ifood',
  },
  {
    value: 'restaurant',
    label: 'Restaurante',
  },
  {
    value: 'store',
    label: 'Loja',
  },
  {
    value: 'gas_station',
    label: 'Posto de gasolina',
  },
  {
    value: 'games',
    label: 'Jogos',
  },
  {
    value: 'other',
    label: 'Outro',
  },
]

export const paymentMethods = [
  {
    value: 'credit-card',
    label: 'Cartão de crédito',
  },
  {
    value: 'boleto',
    label: 'Boleto',
  },
  {
    value: 'pix',
    label: 'Pix',
  },
]

export const installments = [
  {
    value: 'yes',
    label: 'Sim',
  },
  {
    value: 'no',
    label: 'Não',
  },
]

export const numberOfInstallments = () => {
  const options = []

  for (let i = 1; i <= 12; i++) {
    options.push({
      value: i.toString(),
      label: i.toString(),
    })
  }

  return options
}
