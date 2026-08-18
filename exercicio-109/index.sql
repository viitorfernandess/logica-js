-- Para cada conjunto de três segmentos, verificar se eles podem formar um triângulo.
-- Retornar "Yes" quando as três condições da desigualdade triangular forem verdadeiras
-- e "No" caso contrário.

SELECT x, y, z,
CASE 
WHEN x + y > z
AND x + z > y 
AND y + z > x 
THEN 'Yes'
ELSE 'No'
END AS triangle
FROM Triangle;