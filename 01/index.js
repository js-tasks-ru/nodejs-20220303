const http = require('http');
const handler = require('./handler');

const server = new http.Server();

server.on('request', handler);

server.listen(3000);

/**
 * 
 * 1. core modules
 * 2. ./node_modules
 *    ../node_modules
 *    ../../node_modules
 *    /node_modules
 * 
 * ===
 * 
 * NODE_PATH=/asdfasdf:/asdfasdf node index.js
 * 
 */