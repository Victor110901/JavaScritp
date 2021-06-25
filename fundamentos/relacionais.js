console.log('1)', '1' == 1)     // Confere se os dois são iguais (mesmo numero)
console.log('2)', '1' === 1)    // Confere se os dois são completamente iguais (numero e tipo)
console.log('3)', '3' != 3)     // Confere se os dois são diferentes (numeros diferentes)
console.log('4)', '3' !== 3)    // Confere se os dois são completamente diferentes (numero e tipo)

console.log('5)', '3' < 2)      // Confere se o primeiro é menor que o segundo
console.log('6)', '3' > 2)      // Confere se o primeiro é maior que o segundo
console.log('7)', '3' <= 2)     // Confere se o primeiro é menor ou igual o segundo
console.log('8)', '3' >= 2)     // Confere se o primeiro é maior ou igual o segundo

const d1 = new Date(0)
const d2 = new Date(0)
console.log('9)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)