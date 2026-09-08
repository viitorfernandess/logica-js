-- O exercício pede para calcular a distância total percorrida por cada corredor,
-- incluindo corredores que não possuem nenhuma distância registrada.
-- O resultado deve ser ordenado pela distância total em ordem decrescente
-- e, em caso de empate, pelo nome do corredor em ordem crescente.

SELECT
Corredos.name,
COALESCE(SUM(Distancias.distance), 0) AS travelled_distance
FROM Corredores
LEFT JOIN Distancias
ON Corredores.id = Distancias.user_id
GROUP BY Corredores.id, Corredos.name
ORDER BY travelled_distance DESC, Corredores.name ASC;