var http = require('http');
var a=10;
var b=20;
http.createServer(function(req,res){
    //res.writeHead(200,{'content-Type:':"text/html"});
    /*res.write("A:" +a);
    res.write("\nB:" +b);
    res.write(`\nSum: ${a+b}`);
    res.end("\nBye!");*/
}).listen(3000);
console.log("server started on on http://127.0.0.1:3000 ");
