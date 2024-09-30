const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('home page')
    } else if(req.url === '/about'){
        res.end('About page');
    } else{
        res.end('erro page')
    }
})

server.listen(5000, ()=>{
    console.log('server Listening on port 5000');
})