import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_3Mb4yb0EhYMM0EnifyJYGIg8eq6Eg2LKzU8DkH4V');

 export async function convertCurrency(fromCurrency, toCurrency, unit) {
    const response = await freecurrencyapi.latest({
        from_currency: fromCurrency,
        to_currency: toCurrency,
    });
    const multiplier = response.data[toCurrency];
    const finalres=unit*multiplier;
    return finalres;
}
// const result = await convertCurrency('USD', 'EUR', 5);
// console.log(result+" EUR");
