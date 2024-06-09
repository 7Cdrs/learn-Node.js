const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}

myEventEmitter.on('birthday', birthdayEventListener);

// Emit the 'birthday' event with the name as a string
myEventEmitter.emit('birthday', 'Hazel');
