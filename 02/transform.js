const fs = require('fs');
const zlib = require('zlib');
const stream = require('stream');

const transform = zlib.createGzip();

// transform.write('lala');
// transform.on('data', console.log);

// fs.createReadStream('ipsum1.txt')
//     .on('error', error => console.log(error))
//     .pipe(transform)
//     .on('error', error => console.log(error))
//     .pipe(fs.createWriteStream('ipsum.txt.gz'))
//     .on('error', error => console.log(error));

stream.pipeline(
    fs.createReadStream('ipsum.txt'),
    transform,
    fs.createWriteStream('ipsum.txt.gz'),
    (error) => {
        if (error) console.log('error', error);
        else console.log('done');
    }
);