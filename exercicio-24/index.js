// Dado um número inteiro n, retorna o número de bits '1' na sua representação binária (Peso de Hamming)

const hammingWeight = function (n) {
    const bit = n.toString(2)
    let acumulador = 0

    for (i = 0; i < bit.length; i++) {
        if (bit[i] === "1") {
            acumulador++
        }
    }
    return acumulador
}

console.log(hammingWeight(5))