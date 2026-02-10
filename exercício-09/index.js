const numeros = [3, 5, 8, 10, 14, 21, 43, 10, 8]

let contagem = {}

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]


    if (contagem[numero]) {
        contagem[numero]++
    }

    else {
        contagem[numero] = 1
    }
}

for (let numero in contagem) {
    if (contagem[numero] > 1) {
        console.log(numero + " repete " + contagem[numero] + " vezes ")
    }
}