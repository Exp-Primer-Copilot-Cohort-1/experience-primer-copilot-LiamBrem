// Create web server
// 1. get the http module
var http = require('http');
// 2. create server
var server = http.createServer(function(request, response) {
    // 3. set the content type
    response.setHeader('Content-Type', 'text/html');
    // 4. write a response
    response.write('<html><body><h1>Hello, World!</h1></body></html>');
    // 5. end the response
    response.end();
});
// 6. start listening for traffic
server.listen(3000, function() {
    console.log('Listening on port 3000');
});