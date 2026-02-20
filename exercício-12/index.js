const produtos = [
    { nome: "Notebook", preco: 3500, estoque: 3 },
    { nome: "Mouse", preco: 80, estoque: 25 },
    { nome: "Teclado", preco: 150, estoque: 0 },
    { nome: "Monitor", preco: 1200, estoque: 5 },
    { nome: "Cadeira Gamer", preco: 900, estoque: 2 }
]

let valorEmEstoque = 0

for (i = 0; i < produtos.length; i++) {
    valorEmEstoque += produtos[i].preco * produtos[i].estoque
}

console.log(valorEmEstoque)