var a,b,c,d;
a=[
    [34,56,4,3,55,66],
    [45,77,66,44,78,56],
    [456,345,465,86,88,98,976,64,3]
]
// if you need all data
for(b=0; b<a.length; b++){
    for(c=0; c<(a[b].length); c++){
        console.log(a[b][c]);
    }
}

// and single data 
    console.log(a[0][3]);