const EventEmitter = require('events');

console.log('Create event');

const event = new EventEmitter();

setTimeout(() => {
  event.emit('ready', 1010);
}, 5000);

console.log('Export event');
module.exports = event;