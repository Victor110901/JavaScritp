const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Luana',
        nota: 7.8,
    }, {
        nome: 'Mario',
        nota: 6.5
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Maria',
        nota: 8.9
    }, {
        nome: 'Marcelo',
        nota: 9.8
    }]
}]

const getNota = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat([ 7.8, 6.5 ], [ 8.9, 9.8 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)