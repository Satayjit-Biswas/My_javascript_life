function simple(a,b,cal){
    var c = a+b;
    var d = a-b;
    var x=cal(c,d);
    return x;
}
function sum(a,b){
    return a+b;
}
var result1 = simple(6,4,sum);
console.log(result1)

var result2 = simple(8,4,function(a,b){
    return a-b;
})
console.log(result2)
