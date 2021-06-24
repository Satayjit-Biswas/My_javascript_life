var a,b,c,d;
a=[28,3,44,54,64,767,5464,67,77,88,22]

b=64;
for(c=0;c<a.length;c++){
    if(a[c]==b){
        console.log('Your data Is Found.And index Numder'+ c);
        break;
    }
    if((a[c]==a[a.length-1])&& a[c]!=b){
        console.log("sorry Not found")
    }
}
