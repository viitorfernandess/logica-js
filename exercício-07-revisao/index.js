const numeros = [5, 12, 8, 3, 21, 7]

let maior = numeros[0]

for(i = 0; i < numeros.length; i++) {
    if( numeros[i] > maior ) {
        maior = numeros[i]
    }
}

console.log(maior)