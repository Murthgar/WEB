function notas(cod,n1,n2,n3){
    if(n1>n2&&n1>n3){
        media = (n1*4+n2*3+n3*3)/(4+3+3)        
    }
    if(n2>n1&&n2>n3){
        media = (n2*4+n1*3+n3*3)/(4+3+3)        
    }
    if(n3>n2&&n3>n1){
        media = (n3*4+n2*3+n1*3)/(4+3+3)        
    }
    if(media>=5){
        console.log(cod + 'APROVADO! Nota: '+media)
    }else
        console.log('REPROVADO!')
}

notas(1,6,5,2)