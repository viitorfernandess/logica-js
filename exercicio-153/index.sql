// -- Retorna o identificador único e o nome de cada funcionário.
// -- Utiliza LEFT JOIN para incluir todos os funcionários,
// -- mesmo aqueles que não possuem identificador único,
// -- retornando NULL quando não existe correspondência.

SELECT 
    FuncionariosUNI.unique_id,
    Funcionarios.name
FROM Funcionarios
LEFT JOIN FuncionariosUNI
    ON Funcionarios.id = FuncionariosUNI.id;