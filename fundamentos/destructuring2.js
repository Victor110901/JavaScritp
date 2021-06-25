const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [5, 0, 10, 1, 4]
console.log(n1, n3, n5, n6)

const [, [,nota]] = [[, 8, 8], [6, 9, 14]]
console.log(nota)
