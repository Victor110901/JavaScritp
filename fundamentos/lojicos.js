function compras(trabalho1, trabalho2) {
    const comprarSorverte = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwize xor
    const comprarTv32 = trabalho1 != trabalho2
    const ficarSaudavel = !comprarSorverte  // Operador Unário

    return {comprarSorverte, comprarTv50, comprarTv32, ficarSaudavel}
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))