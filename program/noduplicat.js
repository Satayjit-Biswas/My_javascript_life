
function noduplicat(arrayname){
    for(var x=0; x<=arrayname.length; x++){
        for(var y=1; y<arrayname.length; y++){
            if(arrayname[x] == arrayname[y]){
                arrayname.splice((y+1), 2); 
            }
        }
    }
    return arrayname;
}
var a = [1,3,4,5,4,547,354, 45, 5,56, 556, 56, 546,77, 77,77,75,56,34,22,32,323,22]
console.log(noduplicat(a))