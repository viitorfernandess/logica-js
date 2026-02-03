const numeros = [4, 7, 2, 9, 10, 3, 6]

let acumulador = 0

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        acumulador = acumulador + numeros[i]
    }
}

console.log(acumulador)