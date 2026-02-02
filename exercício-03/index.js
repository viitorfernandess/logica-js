const numeros = [3, 8, 1, 6, 10, 7, 4]

let contador = 0

for(i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0 ) {
        contador = contador + 1
    }
}
 console.log(contador)