var http = require('http');
var fs = require("fs");

//404 response which means something went wrong
function send404Response(response){
    response.writeHead(404,{"Context-type": "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}
//Handle user request
function onRequest(request, response){
    // '/' means connecting to homepage
    if( request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {"Context-type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }else{
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running....");
