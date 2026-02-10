const numeros = [3, 5, 8, 10, 14, 21, 43, 10, 8]

let repetido = false

for(let i = 0; i < numeros.length; i++) {
    for(let j = i + 1; j < numeros.length; j++) {
        if(numeros[i] === numeros[j])
            repetido = true
    }
}

console.log(repetido)