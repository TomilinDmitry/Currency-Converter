const rub = document.querySelector('.rubles')
const dollar = document.querySelector('.dollars')
const btn = document.querySelector('.btn button')
async function curse() {
    try {
        const response = await fetch('https://www.cbr-xml-daily.ru/latest.js')
        const data = await response.json()
        console.log(data)
        btn.addEventListener('click', () => {
            let a = rub.value
            let b = data.rates.USD
            resultRub = (a * b).toFixed(2);
            dollar.value = resultRub
            console.log(dollar.value)
        })
    } catch (e) {
        console.error('Ошибка: ', e)
    }
}
curse()
