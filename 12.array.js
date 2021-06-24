var a,b,c,d;
a=[5,4,3,4,66,55,33,22,56,44,33,2];
c=0;
for(b=0;b<a.length;b++){
    console.log(a[b]);
    c=c+a[b];
    a[b]=a[b]+2;
}
console.log("Total ",c)
console.log(a)
a.push(100);
// if you use push method then 
// every push data create lest position 
console.log(a)
a.unshift(200)
// if ues unshift metod then 
// every unshift data create first position 
console.log(a)