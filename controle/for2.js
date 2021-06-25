const notas = [6.9, 9.8, 8.7, 8.8, 7.7]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Noemi',
    sobrenome: 'Oliveira',
    idade: 18,
    peso: 60,
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}