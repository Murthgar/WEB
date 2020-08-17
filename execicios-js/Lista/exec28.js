const vet = [25,26,27,28,29,30,31,23,33,36,85,95,45]
p=0
ip =0
for(let i in vet){
    if(vet[i]%2==0)
        p++
    else
        ip++
}

console.log('numeros pares: '+p)
console.log('numeros impares: '+ip)