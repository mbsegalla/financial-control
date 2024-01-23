export const formatPrice = (price: number): string => {
  const formattedPrice = (price / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return formattedPrice
}
