//  reduce Works with two values , it is semilerly filter and map function,but it's work two deferent values... 

var arr = [4,6,64,43,2,27,564,767,45,88, 97,65,77]

var sum = arr.reduce(function(a,b){
    return a+b;
})
console.log(sum)
var max =arr.reduce(function(a,b){
    return Math.max(a,b);
})
console.log(max)


function redu(narr , cb, newdata){
    for(var i = 0; i<narr.length; i++){
        newdata = cd(newdata, narr[1])
    }
    return newdata
}