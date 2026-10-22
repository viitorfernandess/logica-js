// Implementar o método `last()` no `Array.prototype` para retornar o último elemento de um array. Caso o array esteja vazio, retornar `-1`. O exercício trabalha conceitos de protótipo, `this` e acesso a elementos de arrays.

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1
    }

    return this[this.length - 1]
}

const nums = []

console.log(nums.last())