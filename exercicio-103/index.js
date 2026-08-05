// Dada uma chave de licença contendo letras, números e hífens,
// reformate a string removendo os hífens existentes,
// convertendo letras minúsculas para maiúsculas,
// e criando novos grupos com tamanho k.
// O primeiro grupo pode ter menos caracteres que k,
// enquanto os demais grupos devem possuir exatamente k caracteres.

function licenseKeyFormatting(string, k) {
    let newString = []

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "-") continue

        newString.push(string[i].toUpperCase())
    }

    const totalCaracteres = newString.length

    let primeiroGrupo = totalCaracteres % k

    if (primeiroGrupo === 0) {
        primeiroGrupo = k
    }

    let grupos = []

    grupos.push(newString.slice(0, primeiroGrupo).join(""))

    for (let i = primeiroGrupo; i < newString.length; i += k) {
        grupos.push(newString.slice(i, i + k).join(""))
    }

    return grupos.join("-")

}

console.log(licenseKeyFormatting("2-5g-3-J", 2))