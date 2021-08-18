// how to use filter function ? 
// filter is semiler map and foreach function , filter default paramiter has 3 part value , index and at lest Array, 

var arr = [4,6,64,43,2,27,564,767,45,88, 97,65,77]
// 1 method 
// var a = arr.filter(function(val){
//     return val % 2 === 0;
// })
// console.log(a)




// 2 method 
// function nextarr(narr){
//     oddarr=[]
//     for(var i=0;i<narr.length;i++){
//         if(narr[i]% 2 === 0){
//             oddarr.push(narr[i]);
//         }
//     }
//     return oddarr;
// }
// var r=nextarr(arr)
// console.log(r)



//  3 method 
function nextarr(narr,fun){
    oddarr=[]
    for(var i=0;i<narr.length;i++){
        if(fun(narr[i])){
            oddarr.push(narr[i]);
        }
    }
    return oddarr;
}
var r=nextarr(arr,function(val){
    return val % 2 == 0
})
console.log(r)