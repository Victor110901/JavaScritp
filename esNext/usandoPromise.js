// Com promisse...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })

}

// let nomes = []
// getTurma('A').then(alunos => {
// nomes = nomes.concat(alunos.map(a => `A: ${a.nomes}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nomes}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nomes}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turma => [].concat(...turma))
    .then(alunos => alunos.map(alunos => alunos.nomes))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.mensagem))

getTurma('D').catch(e => console.log(e.mensagem))