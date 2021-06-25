let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // Tem retorno implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Ola!'
} 

ola = () => 'Ola!'
ola = _ => 'Ola!'   // Tem um param

console.log(ola())