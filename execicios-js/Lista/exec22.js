function anuidade(mes, valor){
    console.log((valor*Math.pow(1+5/100,mes)).toFixed(2))
}

anuidade(5,1000)