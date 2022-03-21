// Writable, Readable, Transform, Duplex

// const fs = require('fs');

const stream = require('stream');

// const s = fs.createReadStream('text.txt', {
//     highWaterMark: 11,
//     // encoding: 'utf-8'
// });

// // let text = '';
// const body = [];
// s.on('data', chunk => {
//     console.log('data', chunk);
//     // text += chunk;
//     body.push(chunk);
// });

// s.on('end', () => {
//     console.log('end');
//     console.log(Buffer.concat(body).toString('utf-8'));
// });


const s = stream.Readable.from(['1', '2', '3']);
setTimeout(() => console.log('timeout'), 0);
console.log('start');
s.on('data', console.log);
s.on('end', () => console.log('end'));
console.log('end');
