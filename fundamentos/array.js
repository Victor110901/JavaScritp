const valores = [7.7, 8.9, 44.5, 2.8]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
valores[20] = 44.5
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())  // Exclui o ultimo valor do Array e exibe o valor na tela
delete valores[0]
console.log(valores)

console.log(typeof valores)