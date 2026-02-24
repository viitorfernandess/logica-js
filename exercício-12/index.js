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
let contagem = 0
let valorMedia = 0

// Valor em estoque
for (let i = 0; i < produtos.length; i++) {
    valorEmEstoque += produtos[i].preco * produtos[i].estoque
}

// Produtos com estoque zerado
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].estoque === 0) {
        estoqueZerado.push(produtos[i])
    }
}

// Produto com maior valor
for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].preco > maiorValor.preco) {
        maiorValor = produtos[i]
    }
}

// Quantidade de produtos com estoque zerado
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].estoque === 0) {
        contagem++
    }
}

// Calcular o preço médio dos produtos
for (let i = 0; i < produtos.length; i++) {
    valorMedia += produtos[i].preco
}
valorMedia = valorMedia / produtos.length


console.log(`O valor em estoque é de: R$ ${valorEmEstoque}`)
console.log(`Os produtos com estoque zerados são:`, estoqueZerado)
console.log(`O produto de maior valor é:`, maiorValor)
console.log(`A quantidade de produtos com estoque zerado é:`, contagem)
console.log(`O preço médio dos produtos é: R$`, valorMedia)
