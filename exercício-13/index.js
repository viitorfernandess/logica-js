const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 3 },
  { id: 2, nome: "Mouse", preco: 80, estoque: 25 },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10 },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 5 }
]

const pedidos = [
  { idProduto: 1, quantidade: 1 },
  { idProduto: 2, quantidade: 2 },
  { idProduto: 4, quantidade: 6 }, // estoque insuficiente
  { idProduto: 3, quantidade: 3 }
]

let totalVendido = 0

for ( let i = 0; i < pedidos.length; i++) {
    for ( let j = 0; j < produtos.length; j++) {
        if (pedidos[i].idProduto === produtos[j].id) {
            if (produtos[j].estoque >= pedidos[i].quantidade) {
                totalVendido += pedidos[i].quantidade * produtos[j].preco
            }
        }
    }
}

console.log(totalVendido)