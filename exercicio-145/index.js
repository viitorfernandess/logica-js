// Implementa uma função de filtragem de arrays sem utilizar o método nativo Array.filter(). Percorre os elementos com for, executa a função de callback para verificar quais valores devem ser mantidos e utiliza push() para adicionar os elementos aprovados a um novo array.

function filter(arr, fn) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

const resultado = filter([1, 2, 3, 4], function (n) {
    return n > 2
})

console.log(resultado)