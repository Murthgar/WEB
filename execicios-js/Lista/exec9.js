const notas = [50,68,54,68,30,58,99,68,70,88]
function arredondar(){
    for(let i in notas){
        if(notas[i]%5>2)
            notas[i] += 5 - notas[i]%5
    }
}

function aprovação(){
    for(let i in notas)
        if(notas[i]>=40)
            console.log('Aprovado, nota '+notas[i])
            else
                console.log('Reprovado, nota '+notas[i])
}

arredondar()
aprovação()