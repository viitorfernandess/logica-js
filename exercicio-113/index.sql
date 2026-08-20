-- Encontre todos os clientes que nunca fizeram nenhum pedido.

SELECT Peoples.name
FROM Peoples 
LEFT JOIN Pedidos
ON Peoples.id = Pedidos.peopleId
WHERE Pedidos.peopleId IS NULL;