const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
  const { method, url, headers } = request;
  const userAgent = headers['user=agent'];

  if (url == "/") {
    response.statusCode = 200;

    console.log("Received Request");
    response.write('<html><head><h1><title>Hello</title></head><body><h1>Hello to my World!</h1></body></html>');
    response.end();
  }  else {
    response.statusCode = 404;
    response.write('404: File Not Found!');
    response.end();
  }
});

server.listen(3000, () => {
  console.log("Success! Listening on port 3000");
});