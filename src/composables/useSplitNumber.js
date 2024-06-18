export function useNumberDivider(inputNumber) {
  if (inputNumber > 999) return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  else return inputNumber
}