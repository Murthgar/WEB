function aumento(plano, salario){
    switch(plano){
        case 'A':
            console.log(salario+salario*10/100)
            break;
        case 'B':
            console.log(salario+salario*15/100)
            break;
        case 'C':
            console.log(salario+salario*20/100) 
            break;   
        default:
            console.log('Plano inválido')
    }
}

aumento('A',1000)
aumento('B',1000)
aumento('C',1000)
aumento('D',1000)