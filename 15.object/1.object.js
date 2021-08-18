var a={
    x:12,
    y:20,
    z:203
}
console.log(a.y)
// dot notation 
console.log(a["y"]);
// array notation 

// if you update data of object 
a.y=240;
console.log(a.y)
// add data  
a.x="u";
// if you delete any data 
delete a.y;
console.log(a)