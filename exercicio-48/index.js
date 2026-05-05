const rows = [
    { id: 1, name: "Teclado", stock_quantity: 10 },
    { id: 2, name: "Mouse", stock_quantity: 5 }
]

const newArr = rows.map((item) => ({
    id: item.id,
    name: item.name,
    stockQuantity: item.stock_quantity
}))

console.log(newArr)