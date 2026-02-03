const numeros = [4, 7, 2, 9, 10, 3, 6]

let maior = numeros[0]

for (i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
}

console.log(maior)