/*
Dado um array de números positivos, calcular a soma dos
números de um dígito e a soma dos números de dois dígitos.

Alice pode escolher um dos dois grupos e Bob fica com o outro.
Retornar true se Alice puder obter uma soma maior que a de Bob;
caso contrário, retornar false.
*/


nums = [1, 2, 3, 5, 10]

function canAliceWin(nums) {
    let somaUmDigito = 0
    let somaDoisDigitos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            somaUmDigito += nums[i]
        } else {
            somaDoisDigitos += nums[i]
        }
    }

    if (somaUmDigito !== somaDoisDigitos) {
        return true
    } else {
        return false
    }
}

console.log(canAliceWin(nums))

/*
Alice pode escolher todos os números de um dígito ou todos os números de dois dígitos.

Como Alice sempre escolherá a opção que lhe dá a maior soma, ela vence sempre que as somas dos dois grupos forem diferentes.

Se a soma dos números de um dígito for maior, ela escolhe esse grupo.
Se a soma dos números de dois dígitos for maior, ela escolhe esse grupo.

Portanto, Alice só não consegue vencer quando as somas dos dois grupos são iguais.
*/