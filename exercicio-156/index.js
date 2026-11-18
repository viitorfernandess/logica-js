// Encontrar o único número que aparece uma vez no array,
// utilizando XOR para cancelar os números que aparecem duas vezes.

function singleNumber(nums) {
    let resultado = 0

    for (let i = 0; i < nums.length; i++) {
        resultado = resultado ^ nums[i]
    }
    return resultado
}

console.log(singleNumber([1, 3, 5, 3, 2, 5, 2]))