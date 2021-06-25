// par nome/valor
const saudacao = 'Opa'  // Contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objtos são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua Muito Bonita',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)