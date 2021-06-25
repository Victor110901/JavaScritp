function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor excedente: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(2, 3, 17, 25, 4)
console.log(area(5, 5))