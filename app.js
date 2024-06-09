//process.argv adalah array yang berisi argumen baris perintah yang digunakan untuk menjalankan skrip Node.js

//const firstName = process.argv[2]; 
//const lastName = process.argv[3];  
 
//console.log(`Hello ${firstName} ${lastName}`);



// // mengimpor nilai melalui fungsi global
// const coffe = require('./coffe');

// console.log(coffe);

// const user = require('./user')

// console.log(user);



//Events
//Node.js menyediakan EventEmitter class yang merupakan member events core module
// const {EventEmitter} = require("events");

// const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffe = ({name}) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };

// const makeBill = ({price}) => {
//     console.log(`Total Bill ${price}`);
// };

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on('coffe-order', makeCoffe);
// myEventEmitter.on('coffe-order', makeBill);

//Memicu event 'coffe-order' terjadi 
// myEventEmitter.emit('coffe-order', {name: "Espresso", price: 20000});


//Filesystem 
// const { error } = require('console');
// const fs = require('fs');

// const fileReadCallback = (error, data) => {
//     if (error) {
//         console.log('Gagal memuat berkas');
//         return;
//     }
//     console.log(data);
// }

// fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

//Readable Stream
const fs = require('fs');

const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark:10
});

readableStream.on('readable', () => {
    try{
        process.stdout.write(`[${readableStream.read()}]`);
    }catch(error){
        // catch the error when the chunk cannot be read.

    }
});

readableStream.on('end', () => {
    console.log('Done ga bang');
});