const http = require('http');
const url = require('url');
const server = http.createServer();

server.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.');
});

let messages = [
  { id: 1, user: 'brittany storoz', message: 'hi there!' },
  { id: 2, user: 'bob loblaw', message: 'check out my law blog' },
  { id: 3, user: 'lorem ipsum', message: 'dolor set amet' }
];

function getAllMessages(response) {
  response.writeHead(200, { 'Content-Type': 'JSON' });
  response.write(JSON.stringify(messages));
}

function addMessage(newMessage, response) {
  messages.push(newMessage);

  console.log(newMessage);

  response.writeHead(201, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(newMessage));
  response.end();
}

server.on('request', (request, response) => {
  if (request.method === 'GET') {
    getAllMessages(response);
  } 

  else if (request.method === 'POST') {
    let newMessage = { 'id': new Date() };
    
    request.on('data', (data) => {
      let parsedData = JSON.parse(data);
      newMessage = Object.assign(newMessage, parsedData);
    });
 
    request.on('end', () => {
      addMessage(newMessage, response);
    });
  }
});


