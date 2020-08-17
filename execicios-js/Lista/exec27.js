function deselvolvimento(altura1, taxa1,altura2,taxa2){
    ano = 0
    if(altura1<altura2 && taxa1>taxa2){        
        while(altura1<altura2){
            altura1+=taxa1
            altura2+=taxa2
            ano++
        }
        console.log('A criança menos ira superar a mior em '+ano+' anos.')
    }else if(altura2<altura1 && taxa2>taxa1){
        while(altura1>altura2){
            altura1+=taxa1
            altura2+=taxa2
            ano++
        }
        console.log('A criança menos ira superar a maior em '+ano+' anos.')
    }else
        console.log('A criança menos não irá ultrapassar a maior')
    
}

deselvolvimento(100,4,120,1)