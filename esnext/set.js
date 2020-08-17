const { time } = require("console")

// não aceita repetição/não indexada
const times = new Set()

times.add('Cruzeiro')
times.add('Atletico')
times.add('America').add('Boa').add('Vila Nova')
times.add('Caldense')
times.add('Cruzeiro')

console.log(times)
console.log(times.size)
console.log(times.has('Cruzeiro'))
console.log(times.has('Cruzeiro'))
times.delete('Atletico')
console.log(times.has('Atletico'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)