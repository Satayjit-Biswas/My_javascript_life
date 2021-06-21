// for(var a=1;a<10;a++){
//     console.log(a)
// }
var s=0;
for(var a=1;a<=10;a++){
    s=s+a;   
}console.log(s)

// Infinity loop
for(s=0; ;s++){
    console.log("Infinity loop" ,s)
    if(s==65){
        break;
    }
}