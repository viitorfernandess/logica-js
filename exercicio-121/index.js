// O exercício recebe um array que deveria conter os números de 1 até n,
// mas que possui um número repetido e outro faltando.
// É necessário encontrar o número repetido e o número que está faltando
// e retornar os dois em um array.

function setMismatch(s) {
   const nums = s.sort((a, b) => a - b)

    let repetido = 0
    let somaAtual = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            repetido = nums[i]
        }
        somaAtual += nums[i]
    }
    let faltando = 0
    let somaEsperada = 0
    const n = nums.length

    somaEsperada = n * (n + 1) / 2

    faltando = somaEsperada - somaAtual + repetido

    return [repetido, faltando]
}


console.log(setMismatch([1, 2, 2, 4, 5]))