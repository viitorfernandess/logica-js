// Retorna a quantidade de números do array que possuem uma quantidade par de dígitos.

function findNumbers(nums) {
    let pares = 0

    for (let i = 0; i < nums.length; i++) {
        let newNumber = nums[i].toString()

        if (newNumber.length % 2 === 0) {
            pares++
        }
    }

    return pares
}

console.log(findNumbers([ 12, 345, 2, 6, 8965]))