function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}


// esperarPor()
//     .then(() => console.log('Executando Promisse...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promisse...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promisse...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    const valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
}