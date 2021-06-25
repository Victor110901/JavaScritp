const alunos = [
    {nome: 'Barbara', nota: 9.8},
    {nome: 'Yasmin', nota: 5.6}
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = alunos => alunos.nota
const soma = (total, valor) => total + valor

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)