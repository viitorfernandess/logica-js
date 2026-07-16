
/*
Move Zeroes

Objetivo:
Mover todos os valores 0 para o final do array, mantendo a ordem
relativa dos números diferentes de zero.

Regras:
- Modificar o próprio array (in-place), sem criar um novo.
- Utilizar dois ponteiros:
  - i: indica a posição onde o próximo número diferente de zero deve ficar.
  - j: percorre o array procurando números diferentes de zero.
- Quando arr[j] for diferente de 0, trocar os valores de arr[i] e arr[j]
  e avançar o ponteiro i.
- O ponteiro j deve avançar em todas as iterações até o final do array.
*/
const arr = [0, 1, 0, 3, 12]

function moveZeroes(arr) {
    let i = 0
    let j = i + 1

    while (j < arr.length) {
        if (arr[j] !== 0) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            i++
        
        }

        j++
    }

    return arr
}

console.log(moveZeroes(arr))