function solution(isBadVersion) {

    return function (n) {

        let inicio = 1
        let fim = n

        while (inicio < fim) {
            let meio = Math.floor((inicio + fim) / 2)

            if (isBadVersion(meio)) {
                fim = meio
            } else {
                inicio = meio + 1
            }
        }

        return inicio
    }
}