// Inverter a ordem de todas as vogais presentes na string,
// mantendo as consoantes e suas posições originais.
// Considerar vogais maiúsculas e minúsculas.

function reverseVowels(s) {
    const vogais = "aeiouAEIOU"
    const caracteres = s.split("")
    const vogaisEncontradas = []

    for (let i = 0; i < caracteres.length; i++) {
        if (vogais.includes(caracteres[i])) {
            vogaisEncontradas.push(caracteres[i])
        }
    }

    vogaisEncontradas.reverse()

    let indiceVogal = 0

    for (let i = 0; i < caracteres.length; i++) {
        if (vogais.includes(caracteres[i])) {
            caracteres[i] = vogaisEncontradas[indiceVogal]
            indiceVogal++
        }
    }

    return caracteres.join("")
}

console.log(reverseVowels("PAndeirO"))