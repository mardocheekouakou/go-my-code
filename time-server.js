const net = require('net')  
let arg = process.argv
var date =  new Date()
const server = net.createServer(function (socket) {  
    myDate = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '+ date.getHours()+':'+ date.getMinutes()
    socket.write(myDate)
    socket.end(myDate) 
})  
server.listen(arg[2])  
