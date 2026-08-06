/*
Dado um array onde:
- 0 representa um espaço vazio;
- 1 representa uma flor já plantada;

Verifique se é possível plantar 'n' novas flores sem que existam
duas flores em posições adjacentes.

Retorne true se for possível plantar todas as flores solicitadas;
caso contrário, retorne false.
*/

function canPlaceFlowers(flowerBed, n) {
    if (n === 0) {
        return true
    }
    for (let i = 0; i < flowerBed.length; i++) {
        if ((i === 0 || flowerBed[i - 1] === 0) &&
            flowerBed[i] === 0 &&
            (i === flowerBed.length - 1 || flowerBed[i + 1] === 0)) {
            flowerBed[i] = 1
            n--

            if (n === 0) {
                return true
            }
        }
    }
    return false
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 0))