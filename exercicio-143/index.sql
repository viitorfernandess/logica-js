-- Corrige os nomes para deixar a primeira letra maiúscula
-- e todas as letras restantes minúsculas.
-- Utiliza SUBSTRING para separar as partes do nome,
-- UPPER e LOWER para ajustar a capitalização,
-- e ORDER BY para ordenar os resultados por user_id.

SELECT
user_id,
UPPER(SUBSTRING(name, 1, 1)) ||
LOWER(SUBSTRING(name, 1)) AS name
FROM People
ORDER BY user_id;