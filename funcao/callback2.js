const notas = [6.6, 5.8, 9.0, 7.7, 8.2, 9.9, 7.9, 4.2]

// Sem Callback
const notasBaixas1 = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com Callback
const notasBaixas2 = notas.filter(function(notas) {
    return notas < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)