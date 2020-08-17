function notas(vet){
    for(let i in vet){
        if(vet[i]<5){
            console.log('D')
        }else if(vet[i]>=5&&vet[i]<7){
            console.log('C')
        }else if(vet[i]>=7&&vet[i]<9){
            console.log('B')
        }else
            console.log('A')
    }
}

notas([2.2,3.2,5.5,6.5,7.5,6,3,9,10,2.3])