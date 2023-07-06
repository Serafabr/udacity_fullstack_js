const fs = require('fs');

// Mainline
console.log('Hello, ---------- mainline');
console.log('world! ---------- mainline');


// end mainline / pre timers phase 1
process.nextTick(() => {
  console.log('nexttick ---------- before event loop');
})

// Timers
setTimeout(() => {
  console.log('timeout - 0s ---------- timers 1.0');
}, 0);

setImmediate(() => {
  console.log('immediate - 0s ---------- timers 1.1');
});

setTimeout(() => {
  console.log('timeout - 0s ---------- timers 1.2');
}, 0);

fs.readFile(__filename, () => {
  // end poll phase
  process.nextTick(() => {
    console.log('nexttick - i/o ---------- after polling');
  });
  // check phase
  setImmediate(() => {
    console.log('immediate - i/o ---------- check');
  });
  // timers phase 2
  setTimeout(() => {
    console.log('timeout - 0s ---------- timers 2.0');
  }, 0);
  // timers phase 3
  setTimeout(() => {
    console.log('timeout - 3s ---------- timers 3.0');
    // blocking event loop
    for (let i = 0; i < 3000000000; i++) {
      if (i === 0) {
        console.log('start blocking loop');
      }
      if (i === 2999999999) {
        console.log('end blocking loop');
      }
    }
  }, 3000);
});

// timers phase 4
setTimeout(() => {
  console.log('timeout - 10s ---------- timers 4.0');
}, 10000);

process.on('beforeExit', () => {
  console.log('process.on ---------- before exit');
})