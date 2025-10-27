const http =  require('http');
const fileSystem = require('fs');

const server = http.createServer((req, res) => {
    const  path = req.url;
    if(path === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to the Home Page</h1>');
    } else if(path === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About Us</h1><p>This is the about page.</p>');
    } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
    }
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
