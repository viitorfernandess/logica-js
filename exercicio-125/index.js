// O exercício pede para receber uma lista de e-mails,
// aplicar as regras do '+' e do '.' somente no nome local,
// identificar os endereços que realmente recebem os e-mails
// e retornar a quantidade de endereços diferentes.


function numUniqueEmails(emails) {
    const emailsUnicos = new Set()

    for (let i = 0; i < emails.length; i++) {
        const email = emails[i]

        let [local, dominio] = email.split('@')

        if (local.includes('+')) {
            local = local.slice(0, local.indexOf('+'))
        }

        local = local.replaceAll('.', '')

        const emailTratado = local + '@' + dominio

        emailsUnicos.add(emailTratado)
    }
    return emailsUnicos.size
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"]))