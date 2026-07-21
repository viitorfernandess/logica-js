// Converter cada palavra da frase para Goat Latin:
//
// 1. Se a palavra começar com uma vogal (a, e, i, o ou u),
//    adicionar "ma" ao final.
//
// 2. Se a palavra começar com uma consoante,
//    remover a primeira letra, colocá-la no final da palavra
//    e adicionar "ma".
//
// 3. Adicionar a letra "a" ao final da palavra de acordo com
//    sua posição na frase:
//    - 1ª palavra: "a"
//    - 2ª palavra: "aa"
//    - 3ª palavra: "aaa"
//    - e assim por diante.
//
// 4. Retornar a frase final convertida para Goat Latin.

function toGoatLatin(sentence) {
    let words = sentence.split(" ")
    let result = []

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        const wordIndex = i + 1

        if (word[0].toLowerCase() === "a" ||
            word[0].toLowerCase() === "e" ||
            word[0].toLowerCase() === "i" ||
            word[0].toLowerCase() === "o" ||
            word[0].toLowerCase() === "u"
        ) {
            word += "ma"
        } else {
            word = word.slice(1) + word[0] + "ma"
        }
        word += "a".repeat(wordIndex)
        result.push(word)
    }
    return result.join(" ")
}

console.log(toGoatLatin("abacate pandeiro casa casaco"))