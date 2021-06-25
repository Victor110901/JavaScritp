const alunos = [
    {nome: 'João', nota: 9.7, bolsista: true},
    {nome: 'Maria', nota: 8.6, bolsista: false},
    {nome: 'Pedro', nota: 7.8, bolsista: false},
    {nome: 'Ana', nota: 9.9, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)