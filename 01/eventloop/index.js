const http = require('http');

const server = new http.Server();
//                  3s     6s   9s
// (macro)tasks - [req1, req2, req3]

//                  3s     3s   3s
// (macro)tasks - [req1, req2, req3]
server.on('request', (req, res) => {
    // const now = Date.now();

    // while(Date.now() < now + 3000) {}

    // res.end('hello world');

    setTimeout(() => {
        res.end('hello world');
    }, 3000);
});

server.listen(3000);
