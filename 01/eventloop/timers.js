const fs = require('fs');

console.log('start'); // 1

// nextTick queue - []
// microtask queue - []
// (macro)task queue - []

// setTimeout(() => {}, 0);

new Promise((resolve, reject) => {
  console.log('new Promise'); // 2
  resolve();
})
.then(_ => console.log('then-1')) // 6
.then(_ => console.log('then-2')); // 7

fs.open(__filename, () => {
  console.log('fs.open'); // 8
  queueMicrotask(_ => {
    console.log('queueMicrotask-1'); // 9
  });
});

process.nextTick(() => {
  console.log('nextTick-1'); // 4
  process.nextTick(() => console.log('nextTick-2')); // 5
});

console.log('end'); // 3

