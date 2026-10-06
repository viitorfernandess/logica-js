// Formatar cada palavra do título: palavras com 1 ou 2 letras ficam minúsculas;
// palavras com mais de 2 letras começam com maiúscula e têm o restante em minúsculas.

function capitalizeTitle(word) {

    const wordArray = word.split(" ")

    for (let i = 0; i < wordArray.length; i++) {
        const palavra = wordArray[i]

        if (palavra.length > 2) {
            wordArray[i] = palavra[0].toUpperCase() + palavra.slice(1).toLowerCase()
        } else {
            wordArray[i] = palavra.toLowerCase()
        }
    }

    return wordArray.join(' ')
}

console.log(capitalizeTitle("First leTTeR of EACH Word"))