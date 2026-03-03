const numeros = [4, 7, 10, 3, 9]

let maior = numeros[0]
let menor = numeros[0]
let contadorPar = 0
let contadorImpar = 0
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
    
    if (maior < numeros[i]) {
        maior = numeros[i]
    }
    if (menor > numeros[i]) {
        menor = numeros[i]
    }
    if (numeros[i] % 2 === 0) {
        contadorPar++
    } else {
        contadorImpar++
    }
}

console.log(maior)
console.log(menor)
console.log(contadorPar)
console.log(contadorImpar)
console.log(soma)