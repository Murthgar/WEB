function notas(valor){
    if(Math.trunc(valor/100)>0){
        console.log('Notas de 100: '+Math.trunc(valor/100))
    }
    if(valor%100>=50){
        console.log('Notas de 50: '+Math.trunc(valor%100/50))
    }
    let val = valor - Math.trunc(valor/100) * 100 - Math.trunc(valor%100/50) * 50
    console.log('Notas de 10: '+Math.trunc(val/10))
    val = val - Math.trunc(val/10) * 10;
    console.log('Notas de 5: '+Math.trunc(val/5))
    console.log('Notas de 1: '+Math.trunc(val%5/1))
}

notas(576)