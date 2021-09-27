let fs = require('fs')
let http = require('http')
let arg = process.argv
//console.log(arg)

let url = arg[2]

http.get(url,function(response){

    
    response.setEncoding().on('data', function (data) { 
        console.log(data)
     })  
})