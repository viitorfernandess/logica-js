-- Retornar os filmes que possuem ID ímpar e descrição diferente de "boring",
-- ordenando os resultados pela avaliação (rating) do maior para o menor.

SELECT *
FROM Cinema
WHERE id % 2 <> 0
AND description <> 'boring'
ORDER BY rating DESC;