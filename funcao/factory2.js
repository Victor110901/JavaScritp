function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Iphone', 6899.99))
console.log(criarProduto('Camisa do Cruzeiro', 350.00))