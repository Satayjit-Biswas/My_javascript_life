function add(a , b) {
    console.log(a+b)
}
add(10,20)

var arr1 = [1,3,5]
var arr2 = [5,34,77]
var arr3 = [9,4,3]

function sumarray(arrname){
    var sum =0;
    for(var i=0;i<arrname.length;i++){
        sum=sum+arrname[i];
    }
    console.log(sum)
}
sumarray(arr1)
sumarray(arr2)
sumarray(arr3)