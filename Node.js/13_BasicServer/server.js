var http = require('http');

//request is from users, response is what we sending back
function onRequest(request, response){
    console.log("A user made a request" + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Here is some data for you");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running....");
