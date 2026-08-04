/*
Dado um array de palavras, retornar apenas aquelas que podem ser
digitadas utilizando letras de uma única linha do teclado americano.

Linhas do teclado:
1ª: qwertyuiop
2ª: asdfghjkl
3ª: zxcvbnm

As letras maiúsculas e minúsculas devem ser tratadas da mesma forma.
*/

const firstLine = "qwertyuiop"
const secondLine = "asdfghjkl"
const thirdLine = "zxcvbnm"

function findWords(words) {
    const result = []

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase()

        let line = ""

        if (firstLine.includes(word[0])) {
            line = firstLine
        } else if (secondLine.includes(word[0])) {
            line = secondLine
        } else {
            line = thirdLine
        }

        let isValid = true

        for (let j = 1; j < word.length; j++) {
            if (!line.includes(word[j])) {
                isValid = false
                break
            }
        }

        if (isValid) {
            result.push(words[i])
        }
    }
    return result
}

console.log(findWords(["Alaska", "Hello", "Dad"]))