function add(a,b){
    return a + b
}
function multi1(a,b,sum){
    var c = a+b;
    var d = a-b;
    function multi2(){
        var m = sum(a , b);
        return m*c*d
    }
    return multi2;
}
var x = multi1(3,4,add);
console.log(x())