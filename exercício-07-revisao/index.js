const numeros = [5, 12, 8, 3, 21, 7]

// DESCOBRIR O MAIOR NÚMERO
// let maior = numeros[0]

// for(i = 0; i < numeros.length; i++) {
//     if( numeros[i] > maior ) {
//         maior = numeros[i]
//     }
// }

// console.log(maior)

// DESCOBRIR O MENOR NÚMERO

// let menor = numeros[0]

// for(i = 1; i < numeros.length; i++) {
//     if(numeros[i] < menor) {
//         menor = numeros[i]
//     }
// }

// console.log(menor)

// DESCOBRIR A MÉDIA DOS VALORES

let soma = 0
let media = 0

for (i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
}
media = soma / numeros.length
console.log(media.toFixed(2))
