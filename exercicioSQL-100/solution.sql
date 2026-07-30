-- LeetCode 584 - Find Customer Referee

-- Retorna os clientes que não foram indicados pelo cliente de id 2
-- ou que não possuem indicação.

SELECT name
FROM Customer
WHERE referee_id != 2
   OR referee_id IS NULL;