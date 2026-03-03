const jogadores = [
    { nome: "Ana", pontos: 120 },
    { nome: "Carlos", pontos: 150 },
    { nome: "Bruna", pontos: 180 }
]

let jogadorMaisPontos = jogadores[0]

for (let i = 0; i < jogadores.length; i++) {
    if (jogadorMaisPontos.pontos < jogadores[i].pontos) {
        jogadorMaisPontos = jogadores[i]
    }
}

console.log(jogadorMaisPontos)