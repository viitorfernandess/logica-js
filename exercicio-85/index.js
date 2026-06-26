// Percorre todas as letras do alfabeto.
// Se encontrar uma letra que não existe na palavra,
// ela não é um pangrama e retorna false.
// Se todas as letras forem encontradas, retorna true.

const letras = "abcdefghijklmnopqrstuvwxyz"

function checkIfPangram(word) {
for ( let i = 0; i < letras.length; i++) {
    if (!word.includes(letras[i])) {
        return false
    }
}

return true
}

console.log(checkIfPangram("leetcode"))
