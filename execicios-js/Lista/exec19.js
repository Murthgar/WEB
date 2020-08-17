function lanchonete(codigo,quantidade){
    switch(codigo){
        case 100:
            console.log(3.00*quantidade)
            break;
        case 200:
            console.log(4.00*quantidade)
            break;
        case 300:
            console.log(5.50*quantidade)
            break;
        case 400:
            console.log(7.50*quantidade)
            break; 
        case 500:
            console.log(3.50*quantidade)
            break; 
        case 600:
            console.log(2.80*quantidade)
            break;
        default:
            console.log('Produto não existe')                 
    }
}

lanchonete(100,3)
lanchonete(200,3)
lanchonete(300,3)
lanchonete(400,3)
lanchonete(500,3)
lanchonete(600,3)
lanchonete(700,3)
