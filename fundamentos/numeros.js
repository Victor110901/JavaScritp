const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger (peso1))   // Verifica se é Integer
console.log(Number.isInteger (peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))   // Reduz para quantidade de casas decimais escolhidas
console.log(media.toString())   // Transforma em uma String
console.log(media.toString(2))  // Transforma em valor binario
console.log(typeof media)   // Imprime qual o tipo da constante
console.log(typeof Number)