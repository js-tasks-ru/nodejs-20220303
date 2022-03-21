/**
 * 
 * const replacer = new ReplaceStream();
 * 
 * replacer.write('banana');
 * replacer.write('apple'); -> 'cherry'
 * replacer.write('grape');
 * 
 * replacer.on('data', console.log);
 * 
 */

const stream = require('stream');

class ReplaceStream extends stream.Transform {
    constructor(from, to) {
        super();

        this.from = from;
        this.to = to;
    }

    _transform(chunk, encoding, cb) {
        cb(null, chunk.toString().replaceAll(this.from, this.to));
    }
}

module.exports = ReplaceStream;

// const replacer = new ReplaceStream('banana', 'cherry');

// replacer.write('banana');
// replacer.write('apple apple banana apple');
// replacer.write('grape');

// replacer.on('data', chunk => console.log(chunk.toString()));
