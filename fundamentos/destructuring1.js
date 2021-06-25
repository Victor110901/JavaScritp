// ES2015

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereço:{
        logadouro:'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereço: {logadouro, numero, cep}} = pessoa
console.log(logadouro, numero, cep)

//const { conta: {ag, banco}} = pessoa
//console.log(ag, banco)