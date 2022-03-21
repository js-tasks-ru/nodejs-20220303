function sum(a, b, cb) {
    if (a < 0) {
      process.nextTick(() => cb(new Error('a is negative')));
      return;
    }
  
    setTimeout(() => {
      cb(null, a + b);
    }, 1000);
  }
  
  sum(-1, 2, (err, res) => {
    if (err) console.error(err);
    else console.log(res);
  });
  
  console.log('bla bla bla');

