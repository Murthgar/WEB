function f1(param1, param2){
    vet = []
    for(let i in param1){
        vet[i] = param1[i]*param2[i]
    }
    return vet
}
function f2(a,b){
    vet2 = []
    for(let i in a){
        if(a[i] > 5 && b[i] > 5){
            vet2[i] = a[i]*b[i]
        }
    }
    return vet2
}

vetor1 = [1,2,6,7]
vetor2 = [2,2,6,6]
console.log(f1(vetor1,vetor2))
console.log(f2(vetor1,vetor2))