function falarDepoisde(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisde(3, 'Que legal!')
    .then(frase => frase.concat('?1?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))