function montante(capital, juros, tempo){
    valor = capital + capital * (juros/100) * tempo
    return valor
}

console.log(montante(100,10,2))

function juroscomposto(capital, juros, tempo){
    valor = capital*Math.pow((1+juros/100),tempo)
    return valor.toFixed(2)
}

console.log(juroscomposto(100,10,2))