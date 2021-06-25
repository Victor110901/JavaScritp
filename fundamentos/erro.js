function tratarErroELancar(erro) {
    throw new Error('Deu erro ai oh carai...') 
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritando(obj)