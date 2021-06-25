let valor   // não inicializada
console.log(valor)

valor = null    //ausencia de valor
console.log(valor)
// console.log(valor.toString) // erro

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3,50
console.log(produto)

produto.preço = undefined   // Evitar atribuir undefined
console.log(!!produto.preço)
console.log(produto)
delete produto.preço
console.log(produto)

produto.preço = null //Sem preço
console.log(!!produto.preço)
console.log(produto)