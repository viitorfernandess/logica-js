// O exercício pede para reorganizar a string de acordo com as posições
// indicadas no array de índices e retornar a string embaralhada.

function restoreString(s, indice) {
    let resultado = []

    for (let i = 0; i < s.length; i++) {
        resultado[indice[i]] = s[i]
    }

    return resultado.join('')
}

console.log(restoreString("abcdef", [2, 0, 5, 1, 4, 3]))