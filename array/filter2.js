Array.prototype.filter2 = function(callback){
    const novo=[]
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            novo.push(this[i])
        }        
    }
    return novo
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false},
]


const caro =produto =>produto.preco>=500
const fragil = produto => produto.fragil==true

console.log(produtos.filter2(caro).filter2(fragil))