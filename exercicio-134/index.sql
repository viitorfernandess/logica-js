-- Retornar o nome e o saldo dos usuários cujo saldo seja maior que 10000.
-- O saldo é calculado pela soma de todas as transações de cada conta.

SELECT
BankUser.name,
saldo.balance
FROM BankUser
JOIN (
  SELECT
account,
  SUM(amount) AS balance
  FROM Transaction
GROUP BY account
  ) AS saldo
ON BankUser.account = saldo.account
  WHERE saldo.balance > 10000;