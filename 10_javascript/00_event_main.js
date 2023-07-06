const event = require('./00_event_emitter');

console.log('Start main...');

event.on('ready', (data) => {
  console.log('Event is ready:')
  console.log(data);
})

console.log('Finish main...')