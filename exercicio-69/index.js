// O exercício pede para encontrar qual número está faltando
// no intervalo de 0 até n dentro do array nums.

const num = [ 3, 0, 1]

function missingNumber(nums) {
    let n = nums.length

    let expectedSum = 0
    let currentSum = 0

    // soma dos números que DEVERIAM existir
    for (let i = 0; i <= n; i++) {
        expectedSum += i
    }

    // soma dos números que EXISTEM no array

    for (let num of nums) {
        currentSum += num
    }

    // diferença = número faltando

    return expectedSum - currentSum
}

console.log(missingNumber(num))

// Tempo de execução: O(n)
// Percorremos os números de 0 até n e também todos os elementos do array.
