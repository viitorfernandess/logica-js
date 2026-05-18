/*
Código Morse Internacional

Cada letra do alfabeto possui uma representação em código Morse.

Tabela Morse:
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
"-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
"..-","...-",".--","-..-","-.--","--.."]

Objetivo:
Dado um array de palavras, transformar cada palavra em código Morse
concatenando o código de cada letra.

Retornar a quantidade de transformações diferentes existentes.

Exemplo:
Input: ["gin","zen","gig","msg"]

Transformações:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

Output: 2

Explicação:
Existem apenas 2 transformações Morse diferentes.
*/

const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
    "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
    "..-", "...-", ".--", "-..-", "-.--", "--.."]

function transformWord(words) {
    let transformacao = ""

    for (let i = 0; i < words.length; i++) {
        const palavra = words[i]

        for (let j = 0; j < palavra.length; j++) {
            const letra = palavra[j]
            const index = letra.charCodeAt(0) - 97
            const codigo = morse[index]
            transformacao += codigo
        }
    }

    return transformacao

}

const words = ["gin", "zen"]

console.log(transformWord(words))

