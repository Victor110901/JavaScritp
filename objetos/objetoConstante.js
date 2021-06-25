// Pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa -> 456 -> {...}
// Pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const outraPessoa = Object.freeze({nome: 'João'})
console.log(outraPessoa.nome)
outraPessoa.nome = 'Maria'
console.log(outraPessoa)