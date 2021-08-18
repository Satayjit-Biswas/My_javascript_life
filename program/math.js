var number = -5;
console.log(Math.abs(number));
var n1=21.9349;
var n1ans = Math.ceil(n1)
console.log(n1ans)
var n1ans = Math.floor(n1)
console.log(n1ans)
var n1ans = Math.round(n1)
console.log(n1ans)
var n1ans = Math.random()
console.log(Math.round(n1ans))
var n = 0;
while (n<5){
    var n1ans = Math.random() * n
    console.log(Math.round(n1ans))  
    n++;
}
var max = Math.max(5,43,65)
console.log(max)
var max = Math.min(5,43,65)
console.log(max)

var datas=[23,35,567,8997,564,2,24,57,53]; 

// array lergest number 
console.log('array lergest number ')
function arraydataler(arraynameler){
    var ler = datas[0] ;
    for(var x=0;x<=datas.length;x++){
        if(datas[x]>ler){
            var ler = datas[x];
        }
    }
    console.log(ler)
}
arraydataler(datas)

// array lowest number 
console.log('array lowest number ')
function arraydatalow(arraynamelow){
    var low = datas[0] ;
    for(var x=0;x<=datas.length;x++){
        if(datas[x]<low){
            var low = datas[x];
        }
    }
    console.log(low)
}
arraydatalow(datas)



