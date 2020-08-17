function palavras(str,str2){
    valor1 = str.toUpperCase()
    valor2 = str2.toUpperCase()
    teste = true;
    for(i = 0; i<valor1.length;i++){
        for(j = 0; j<valor2.length;j++){
            if(valor1.charAt(i)==valor2.charAt(j)){
                teste = true
                break
            }else{
                teste = false
            }
        }
        if(!teste){
            return teste
        }
    }
    return teste
}

console.log(palavras('add','cba'))