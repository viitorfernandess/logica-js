// Cria um novo objeto a partir de uma linha do banco, convertendo nomes de propriedades para camelCase

const row = { id: 1, name: "Teclado", stock_quantity: 10 }

const newRow = {
    id: row.id,
    name: row.name,
    stockQuantity: row.stock_quantity
}

console.log(newRow)