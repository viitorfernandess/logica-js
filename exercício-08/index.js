const numeros = [3, 5, 8, 10, 14, 21, 43, 10, 8]

let repetidos = []

for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] === numeros[j]) {

            if (!repetidos.includes(numeros[i])) {
                repetidos.push(numeros[i])
            }
        }

    }
}

console.log(repetidos)