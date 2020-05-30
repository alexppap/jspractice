const events = require('events');
const emitter = new events.EventEmitter()
emitter.on('event', function(msg){
  console.log(msg)
})

emitter.emit('event', 'i am god')