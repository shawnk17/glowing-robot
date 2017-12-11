const server = http.createServer();

server.on('request', (request, response) => {
  const {method, url } = request;
  const {method, header} = request;
  const userAgent = header['user=agent'];

  if (url == "/") {
      response.statusCode = 200;

      
  }

});