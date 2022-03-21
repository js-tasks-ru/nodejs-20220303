const http = require('http');
const stream = require('stream');
const ReplaceStream = require('./replace');

const server = new http.Server();

server.on('request', (req, res) => {
    let m = 'http://localhost:3000';
    let a = new URL(req.url, m);

    let from = a.searchParams.get('from');
    let to = a.searchParams.get('to');

    // return, throw

    if (!to) {
        res.statusCode = 400;
        res.end('`to` is missing!!');
        return;
    }

    const replacer = new ReplaceStream(from, to);

    // req.on('data', chunk => replacer.write(chunk));

    // res.write()
    // res.end()

    req
        .pipe(replacer)
        .on('error', error => {
            console.log(error);
            res.statusCode = 500;
            res.end('internal error');
        })
        .pipe(res);

    // stream.pipeline(
    //     req, replacer, res,
    //     (error) => {
    //         if (error) console.log(error);
    //         else console.log('end');
    //     }
    // );
});

server.listen(3000);