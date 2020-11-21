const fs = require('fs');

function day2(){
    fs.readFile('./day2.txt',(err,data)=>{
        const direction = data.toString();
        const darray = direction.split('\r\n');

        var b =[]
        var rlenght =[]
        darray.forEach(element =>{
            var d = element.split('x')
            var a = d.sort(function(e, f){return e - f})
            var c = 2*a[0]*a[1] + 2*a[1]*a[2] + 2*a[0]*a[2] + a[0]*a[1]
            var r = 2*a[0]+2*a[1] + a[0]*a[1]*a[2]
            rlenght.push(r)
            b.push(c)
        });

        sum = b.reduce((e,f)=>e+f)
        rsum = rlenght.reduce((e,f)=>e+f)
     console.log(rsum)
       
    })
}

day2()