let fs = require('fs')
let http = require('http')
const bl = require('bl')
let arg = process.argv
//console.log(arg)

let url = arg[2]

http.get(url,function(response){

    response.pipe(bl(function (err, data) {
        
        console.log(data.toString().length)
        console.log(data.toString())
        
        
    }))  
})