// Retornar a quantidade de argumentos recebidos pela função utilizando Rest Parameter.

function argumentsLength(...args) {
    return args.length
}

console.log(argumentsLength({}, null, "3"))