-- Retorna os nomes dos usuários que nunca fizeram pedidos,
-- utilizando LEFT JOIN para relacionar as tabelas Usuario e Pedido
-- e IS NULL para identificar usuários sem pedidos correspondentes.

SELECT name
FROM Usuario
LEFT JOIN Pedido
ON Usuario.id = Pedido.customerId
WHERE Pedido.customerId IS NULL;
