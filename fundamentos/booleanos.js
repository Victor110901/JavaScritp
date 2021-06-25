let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!1)    // ! - Força ser True or False
console.log(!1)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)  // Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' '))     // Retorna True, pois, precisa apenas de uma atribuição ser verdadeira 
console.log(('' || null || 0 || 'epa'))     // Retornará o unico falor True da expressão

let nome = ''
console.log(nome || 'Desconhecido')
nome = 'Lucas'
console.log(nome || 'Desconhecido')