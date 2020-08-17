//operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função

const { pseudoRandomBytes } = require("crypto")

//usar spread com objeto
const funcionario = { nome: 'Maria, salario: 12348.99'}
const clone = {ativo: true,...funcionario}
console.log(clone)

// usar spread com array
const GrupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ... GrupoA, ' Rafaela']
console.log(grupoFinal)