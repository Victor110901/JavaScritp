const alunos = [
    {nome: 'João', nota: 9.7, bolsista: true},
    {nome: 'Maria', nota: 8.6, bolsista: false},
    {nome: 'Pedro', nota: 7.8, bolsista: false},
    {nome: 'Ana', nota: 9.9, bolsista: true}
]

// Todos os alunos são bolsistas ?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))