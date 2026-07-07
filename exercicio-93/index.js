// O problema pede para calcular qual é o dia do ano correspondente à data informada.
// Para isso, somamos os dias de todos os meses anteriores ao mês da data,
// adicionamos o dia do mês e, se o ano for bissexto e a data for após fevereiro,
// acrescentamos mais 1 ao resultado.

function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
}


function dayOfYear(date) {
    const parts = date.split("-")

    const year = Number(parts[0])
    const month = Number(parts[1])
    const day = Number(parts[2])

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let sumMonths = 0
    for (let i = 0; i < month - 1; i++) {
        sumMonths += daysInMonth[i]
    }

    let result = sumMonths + day

    if (isLeapYear(year) && month > 2) {
        result++
    }

    return result
}

console.log(dayOfYear("2020-03-15"))