function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Ola Mundo', 123)
const aula2 = new Aula('Tchau tchau mundo', 456)
console.log(aula1, aula2)

// Simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Ola mundo', 123)
const aula4 = novo(Aula, 'Tchau tchau mundo', 456)
console.log(aula3, aula4)