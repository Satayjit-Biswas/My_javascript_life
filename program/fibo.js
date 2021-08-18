// fibonas number 
console.log('fibonas number  ')

function conter(num){
    const fibo = [0,1]
    for(var i = 2;i<=num;i++){
        var result =  fibo[(i-1)] + fibo[(i-2)]
        fibo.push(result);
    }
    console.log(fibo)
}
conter(10)