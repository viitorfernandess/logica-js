const produtos = [
    { nome: "Notebook", preco: 3500, estoque: 3 },
    { nome: "Mouse", preco: 80, estoque: 25 },
    { nome: "Teclado", preco: 150, estoque: 0 },
    { nome: "Monitor", preco: 1200, estoque: 5 },
    { nome: "Cadeira Gamer", preco: 900, estoque: 0 }
]

let valorEmEstoque = 0
let estoqueZerado = []
let maiorValor = produtos[0]


for (let i = 0; i < produtos.length; i++) {
    valorEmEstoque += produtos[i].preco * produtos[i].estoque
}

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].estoque === 0) {
        estoqueZerado.push(produtos[i])
    }
}

for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].preco > maiorValor.preco) {
        maiorValor = produtos[i]
    }
}

console.log(`O valor em estoque é de: R$ ${valorEmEstoque}`)
console.log(`Os produtos com estoque zerados são:`, estoqueZerado)

console.log(`O produtos de maior valor é:`, maiorValor)
