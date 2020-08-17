class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        
    }
}

const p1 = new Pessoa('Jão')
p1.falar()

function criarPessoa(nome){
    this.nome = nome
    this.falarr = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa = new criarPessoa('João')
pessoa.falarr()

