-- Retornar os clientes que nunca realizaram nenhum pedido.
-- Utilizar as tabelas Customers e Orders para identificar os clientes
-- que não possuem nenhum pedido associado.

SELECT Customers.name
FROM Customers
LEFT JOIN Orders
ON Customers.id = Orders.customerId
WHERE Orders.customersId IS NULL;