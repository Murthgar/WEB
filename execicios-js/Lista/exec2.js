function isTriangulo(a,b,c){
    if(a==b&&a==c){
        console.log('Equilatero')
    }else if(a==b || a==c || b==c){
        console.log('Isósceles')
    }else
        console.log('Escaleno')
}

isTriangulo(10,10,10)
isTriangulo(10,2,10)
isTriangulo(10,5,2)