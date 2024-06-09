const fs = require('fs');

// Membaca isi file 'notes.txt' secara asinkron dengan encoding utf-8
fs.readFile('notes.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    // Menampilkan isi file di terminal
    console.log(data);
});
