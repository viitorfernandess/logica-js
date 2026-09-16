// O exercício pede para verificar se o array é monotônico,
// ou seja, se os valores estão sempre em ordem crescente ou sempre em ordem decrescente.
// Números iguais são permitidos nas duas direções.
// Retornar true se o array for crescente ou decrescente e false caso contrário.


function isMonotonic(nums) {
    let i = 0

    let crescente = true
    let decrescente = true

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] < nums[j]) {
            decrescente = false
        }

        if (nums[i] > nums[j]) {
            crescente = false
        }

        i++
    }
    return crescente || decrescente
}

console.log(isMonotonic([2, 3, 3, 4]))