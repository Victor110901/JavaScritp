const pai = {nome: 'Dougras', corCabelo: 'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Lauryane'
console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Algostinha'
console.log(`Meu nome é ${filha2.nome} e tenho cabelo na cor ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`por Herança: ${key}`)
}