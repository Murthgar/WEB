function plano(idade){
    if(idade < 10){
        console.log('valor: 180')
    }else if(idade > 9 && idade < 31){
        console.log('valor: 150')
    }else if(idade >30 && idade < 61){
        console.log('valor: 195')
    }else 
        console.log('valor: 130')
}

plano(5)
plano(15)
plano(35)
plano(70)