function impar(a,b){
    maior = 0
    menor = 100
    if(a>b){
        maior = a
        menor = b
    }else{
        maior = b
        menor = a
    }
    while(menor<=maior){
        if(menor%2!=0)
            console.log(menor)
        menor++
    }
}

impar(3,27)