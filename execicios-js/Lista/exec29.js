function contar(vet){
    d = 0
    f = 0
    for(let i in vet){
        if(vet[i]>9&&vet[i]<21)
            d++
        else
            f++
    }
    console.log('Numeros dentro do intervalo: '+d)
    console.log('Numeros fora do intervalo: '+f)
}

contar([10,15,20,36,85,98,74,21,54,23,11,12,13,15,14,20,36,59,85])
contar([10,11,25,3])