function tree(n){
    printTop(n)
    printBottom(n)


}

function printTop(n){
    for(var i =1 ; i<=n; i++){
        console.log(' '.repeat(n-i)+'*'.repeat(2*i-1))}

}



function printBottom(n){
    for(var i =1 ; i<=n; i++){
    console.log(' '.repeat(n-1)+'*')}
}



tree(10)