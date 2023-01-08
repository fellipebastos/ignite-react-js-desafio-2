export const formatMoney = (value: number, locale = 'pt-BR') =>
  value.toLocaleString(locale, {
    minimumFractionDigits: 2,
  })
