function digits(num) {
    while (num >= 10) {

        let numSeparados = num.toString().split('')
        let soma = 0

        for (let i = 0; i < numSeparados.length; i++) {
            soma += Number(numSeparados[i])
        }

        num = soma
    }

    return num

}

console.log(digits(38))
