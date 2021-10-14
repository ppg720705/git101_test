//isPrime

function isPrime(number){
    
    if(number===1) return false

    for(var i=2; i<number ; i++){
        if(number%i==0){
            return false
        }
    }
    return true

}

function generateNumber(n){

    for(var i=1 ; i<=n ; i++){
        if (isPrime(i)){
            console.log(i)
        }

    }

}

generateNumber(100)



ksdfjkjsdlkfjljkj