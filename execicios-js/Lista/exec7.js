function bhaskara(a,b,c){
    delta = Math.pow(b,2) -4*a*c
    if(delta<0){
        console.log('Delta é negativo')
    }else{
        x1 = (b*-1 + Math.sqrt(delta))/2
        x2 = (b*-1 + Math.sqrt(delta))/2
        console.log('x = '+x1.toFixed(2)+' x" = '+x2.toFixed(2))
        
    }    
}
bhaskara(3,-5,1)