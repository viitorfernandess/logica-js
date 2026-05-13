// Percorrer todas as pedras e verificar quantas delas também são joias


function numJewelsInStones(stringJewels, stringStones) {
    let acumulador = 0
    for (let i = 0; i < stringStones.length; i++) {
        if (stringJewels.includes(stringStones[i]))
            acumulador++
    }

    return acumulador
}

console.log(numJewelsInStones("aA", "aAAbbb"))