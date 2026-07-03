// O array representa um número inteiro, onde cada posição é um dígito.
// O objetivo é somar 1 a esse número sem convertê-lo para Number ou BigInt,
// pois ele pode ser maior do que o limite suportado pelo JavaScript.
// Para isso, percorremos o array do último dígito para o primeiro,
// simulando a soma feita no papel (tratando o "vai um" quando o dígito é 9).

const arr = [9, 9, 9]

function plusOne(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++
      return arr
    }
    arr[i] = 0
  }

  arr.unshift(1)

  return arr
}

console.log(plusOne(arr))

// function plusOne(digits) {

//     // Percorre o array do último elemento até o primeiro
//     for (let i = digits.length - 1; i >= 0; i--) {

//         // Se o dígito for menor que 9,
//         // basta somar 1 e terminar.
//         if (digits[i] < 9) {
//             digits[i]++
//             return digits
//         }

//         // Se chegou aqui, o dígito era 9.
//         // 9 + 1 = 10
//         // Então essa posição vira 0
//         // e o "vai um" continua para a esquerda.
//         digits[i] = 0
//     }

//     // Se saiu do for, significa que TODOS eram 9.
//     // Exemplo:
//     // [9]
//     // [9,9]
//     // [9,9,9]
//     //
//     // Então precisamos criar um novo dígito na frente.
//     digits.unshift(1)

//     return digits
// }