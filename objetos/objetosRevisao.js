// Coleção dinamica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro =  {
    modelo: 'A4',
    preco: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 52,
        endereco: {
            logadouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Erick',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logadouro'] = 'Av Gigante'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.idade
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) 