function revenda(tipo){
    switch(tipo){
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break;
        case 'sedan':
            console.log('Tem certeza que prefere este modelo?')
            break;
        case 'motocicleta':
            console.log('Tem certeza que prefere este modelo?')
            break;
        case 'caminhonete':
            console.log('Tem certeza que prefere este modelo?')
            break;
        
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
    }
}

revenda('hatch')
revenda('sedan')
revenda('motocicleta')
revenda('caminhonete')
revenda('uno')