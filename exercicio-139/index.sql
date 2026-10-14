-- Encontrar os funcionários que recebem um salário maior que o de seus gerentes.
-- Utiliza JOIN para relacionar a tabela Employee com ela mesma,
-- comparando o managerId do funcionário com o id do gerente.
-- Filtra os resultados com WHERE para retornar apenas os salários maiores.

SELECT
e.name AS Employee
FROM Employee e 
JOIN Employee g
ON e.managerId = g.id
WHERE e.salary > g.salary;