const pontuacao = [2,8,7,5,9,12]

function comparar(){
    let melhor = pontuacao[0]
    let pior = 100
    for(i=0;i<pontuacao.length;i++){
        if(melhor<pontuacao[i])
            melhor++
        if(pior>pontuacao[i])
            pior = pontuacao[i]
    }
    console.log('Numero de vezes que superou sua melhor pontuação '+ melhor)
    console.log('Sua pior pontuação '+pior)
}

comparar()