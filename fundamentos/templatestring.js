const nome ='Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const templace = `
    Olá
    ${nome}!`

console.log(concatenacao, templace)

// Expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)