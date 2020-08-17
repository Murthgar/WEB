function criarProduto(nome, valor){
    return{
        nome,
        valor,
        desconto: 0.1
    }
}

console.log(criarProduto('Queijo',12))