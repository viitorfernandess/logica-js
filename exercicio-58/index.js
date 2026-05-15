/*
Dado um array de palavras, retorne apenas as palavras que podem ser digitadas
usando letras de apenas uma linha do teclado.

Linhas do teclado:
1ª linha: "qwertyuiop"
2ª linha: "asdfghjkl"
3ª linha: "zxcvbnm"

Exemplo:
Input: ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Explicação:
- "Alaska" pode ser digitada usando apenas a segunda linha.
- "Dad" pode ser digitada usando apenas a segunda linha.
- "Hello" e "Peace" utilizam letras de mais de uma linha.
*/

const words = "dad"

function findWords(words) {
    const firstRow = "qwertyuiop"
    const secondRow = "asdfghjkl"
    const thirdRow = "zxcvbnm"

    let correctRow = ""

    if (firstRow.includes(words[0].toLowerCase())) {
        correctRow = firstRow
    } else if (secondRow.includes(words[0].toLowerCase())) {
        correctRow = secondRow
    } else {
        correctRow = thirdRow
    }

    for (let i = 0; i < words.length; i++) {
        if (!correctRow.includes(words[i].toLowerCase()))
            return false
    }

    return true
}

console.log(findWords(words))
