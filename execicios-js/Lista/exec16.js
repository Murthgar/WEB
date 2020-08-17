function calculadora(a,b,operação){
    switch(operação){
        case '+':
            console.log(a+b)
            break
        case '-':
            console.log(a-b)
            break
        case '*':
            console.log(a*b)
            break
        case '/':
            console.log(a/b)
            break    
        default: 
            console.log('Operação não suportada.')  
    }
}

calculadora(3,5,'+')
calculadora(3,5,'-')
calculadora(3,5,'/')
calculadora(3,5,'*')
calculadora(3,5,'5')