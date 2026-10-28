/*
Exercício: verificar se um objeto ou array está vazio.
Object.keys() retorna as chaves do objeto ou os índices do array.
.length verifica a quantidade de chaves.
Se a quantidade for zero, retorna true; caso contrário, retorna false.
*/

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true
    }

    return false
}

console.log(isEmpty({}))                    // true
console.log(isEmpty({ x: 5, y: 42 }))       // false
console.log(isEmpty([]))                    // true
console.log(isEmpty([null, false, 0]))      // false