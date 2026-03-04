const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 3 },
    { id: 2, nome: "Mouse", preco: 80, estoque: 10 }
]


function venderProduto(id, quantidade) {
    let produtoEncontrado = null
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === id) {
            produtoEncontrado = produtos[i]
            break
        }
    }

    if (!produtoEncontrado) {
        return "Produto não encontrado"
    }

    if (produtoEncontrado.estoque < quantidade) {
        return "Estoque insuficiente"
    }
    produtoEncontrado.estoque -= quantidade
    return produtoEncontrado
}

console.log(venderProduto(4, 5))
console.log(produtos)