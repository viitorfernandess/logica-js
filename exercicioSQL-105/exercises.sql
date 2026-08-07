// Encontrar emails duplicados

SELECT email, COUNT(email)
FROM Persons
GROUP BY email
HAVING COUNT(email) > 1;