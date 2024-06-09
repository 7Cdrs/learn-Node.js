//Readable Stream
//Teknik ini tidak membaca berkas secara sekaligus, tapi dengan mengirim bagian demi bagian. Cara inilah yang digunakan oleh YouTube agar video dapat ditampilkan seketika kepada pengguna.
// const fs = require('fs');

// const readableStream = fs.createReadStream('./article.txt', {
//     highWaterMark:10
// });

// readableStream.on('readable', () => {
//     try{
//         process.stdout.write(`[${readableStream.read()}]`);
//     }catch(error){
        // catch the error when the chunk cannot be read.

//     }
// });

// readableStream.on('end', () => {
//     console.log('Done ga bang');
// });

//Writable Stream

const fs = require('fs');

const  writableStream = fs.createWriteStream('output.txt');

writableStream.write("Ini merupakan baris pertama!\n");
writableStream.write("Ini merupakan baris kedua!\n");
writableStream.end("Akhir dari writable stream!");

// const fs =require('fs');

// const writableStream = fs.createWriteStream('./input.txt',{
//     highWaterMark:15
// });

// writableStream.write('Lorem ipsum dolor sit amet\n, consectetur adipiscing elit\n, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n. Ut enim ad minim veniam\n, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\n. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\n. Excepteur sint occaecat cupidatat non proidentn\n, sunt in culpa qui officia deserunt mollit anim id est laborum\n.');









