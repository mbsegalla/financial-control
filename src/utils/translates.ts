export const translatePaymentMethod = (paymentMethod: string) => {
  const paymentMethodTranslations: { [key: string]: string } = {
    debit: 'Cartão de débito',
    credit: 'Cartão de crédito',
    money: 'Dinheiro',
    pix: 'Pix',
    ticket: 'Vale alimentação',
    other: 'Outro',
  }

  return paymentMethodTranslations[paymentMethod]
}

export const translateCategory = (category: string) => {
  const categoryTranslations: { [key: string]: string } = {
    food: 'Alimentação',
    transport: 'Transporte',
    health: 'Saúde',
    entertainment: 'Entretenimento',
    education: 'Educação',
    other: 'Outro',
  }

  return categoryTranslations[category]
}
