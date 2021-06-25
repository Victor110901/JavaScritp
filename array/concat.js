const filhos = ['Bernard', 'Luan']
const filhas = ['Ana Clara', 'Alice']
const totos = filhas.concat(filhos, 'Penetra')
console.log(totos, filhos, filhas)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))