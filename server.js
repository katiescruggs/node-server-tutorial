const http = require('http');
const url = require('url');

const server = http.createServer();

let messages = [
  { id: 1, user: 'brittany storoz', message: 'hi there!' },
  { id: 2, user: 'bob loblaw', message: 'check out my law blog' },
  { id: 3, user: 'lorem ipsum', message: 'dolor set amet' }
];

server.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.');
});

server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello World\n');
  response.end();
});


