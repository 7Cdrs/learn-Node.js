const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2]; // Menggunakan nama dari argumen baris perintah
const environment = process.env.NODE_ENV = 'development'; // Mendapatkan mode lingkungan dari variabel lingkungan NODE_ENV

for (let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai ${yourName}`);
console.log(`Mode lingkungan: ${environment}`);
console.log(`Penggunaan memory: ${initialMemoryUsage} naik menjadi ${currentMemoryUsage}`);
