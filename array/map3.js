Array.prototype.map2 = function(callback){
    const novo = []
    for(let i = 0; i < this.length; i++){
        novo.push(callback(this[i], i, this))        
    }
    return novo
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
const array = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(array).map2(apenasPreco)
console.log(resultado)