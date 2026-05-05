// Usa map para criar um novo array com os valores multiplicados por 2
const arr = [1, 2, 3, 4]

function transform(number) {
    const result = number * 2
    return result
}

const newArr = arr.map(transform)
console.log(newArr)