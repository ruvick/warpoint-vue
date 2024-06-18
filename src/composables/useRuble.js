export const useRuble = (value) => {
  return new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    trailingZeroDisplay: 'stripIfInteger'
  }).format(value).replace(',', '.')
}
