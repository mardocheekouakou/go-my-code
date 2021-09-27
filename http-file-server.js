const http = require('http')  
let fs = require('fs')
let arg = process.argv
     const server = http.createServer(function (req, res) {  
        var data = fs.createReadStream()  
        data.pipe(input.txt)
     })  
     server.listen(arg[2])  
   
