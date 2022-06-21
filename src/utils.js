export const currencyFormatter = new Intl.NumberFormat(undefined,{
    currency: 'eur',
    style: 'currency',
    minimumFractionDigits: '0 '
})

export function getProgressBarVariant(amount, max){
    const ratio = amount / max
    if (ratio < .5) return 'primary'
    if (ratio <.75) return 'warning'
    return 'danger'
}