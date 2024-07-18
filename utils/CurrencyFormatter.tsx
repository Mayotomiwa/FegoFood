const CURRENCY_SYSTEM = new Intl.NumberFormat('en-NG', {currency: 'NGN', style: 'currency'})
export default function currencyFormatter(number: number) {
    return CURRENCY_SYSTEM.format(number)
}
