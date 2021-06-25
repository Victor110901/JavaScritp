const pilotos = ['Vettel', 'Alonso', 'Raikonnem', 'Massa']
pilotos.pop()   // Remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Vertapen')    // Adiciona um elemento no final do Array
console.log(pilotos)

pilotos.shift()     // remove o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton')     // Adiciona um elemento no inicio do Array
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')      // Adiciona novos elementos a partis do indicie selecionado (2)
console.log(pilotos)

// Remover
pilotos.splice(3, 1)    // Remove a partir do indice selecionado (3), a quantidade de elementos selecionados (1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)      // Cria novo Array, a partir do indice selecionado (2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)     // Cria novo Array, a partir do indice incial (1), ate o indice final (4)
console.log(algunsPilotos2)