// Create web server
// 1. Create web server
// 2. Handle request and response
// 3. Return a response to the client
// 4. Start the server
// 5. Test the server

// 1. Create web server
const http = require('http');
const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    // 2. Handle request and response
    // 3. Return a response to the client
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

// 4. Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// 5. Test the server
// node comments.js
// curl http://localhost:3000
// Server running at http://localhost:3000/
// Hello World