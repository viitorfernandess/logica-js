const numeros = [2, 7, 4, 9, 1, 10, 3]

let contador = 0

for (i = 0; i <= numeros.length - 1; i++) {
    if (numeros[i] > 5) {
        contador = contador + 1
    }
}

console.log(contador)