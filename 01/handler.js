let i = 0;

const obj = {};

function handler(req, res) {
    obj[Math.random()] = '*'.repeat(100000).split('');

    i++;
    res.end(i.toString());
}

module.exports = handler;
// exports.handler = handler;