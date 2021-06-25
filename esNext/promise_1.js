function primeiroNome(array) {
    return array[0]
}

function primeiraLeta(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

const p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'João', 'Maria'])
})

p
    .then(primeiroNome)
    .then(primeiraLeta)
    .then(letraMinuscula)
    .then(console.log)