vet = [3,5,6,2,4,1,9,8,7,0]
max =0
min = 100000000000
for(let i in vet){    
    if(vet[i]>max)
        max = vet[i]
    if(vet[i]<min){
        min = vet[i]
    }    
}
console.log(min)
console.log(max)