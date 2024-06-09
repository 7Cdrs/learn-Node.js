
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * param request: objek yang berisikan informasi terkait permintaan
 * param response: objek yang digunakan untuk menanggapi permintaan
 */

//Membuat HTTP Server

// const http = require('http');

// const requestListener = (request, response) => {
//     response.setHeader('Content-type', 'text/html');

//     response.statusCode = 200;
//     response.end('<h1>Halo HTTP server!</h1>');
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`server berjalan pada http://${host}:${port}`);
// });


//Method/Verb Request
// const http = require('http');
// const requestListener = (request,response)=> {
//     response.setHeader('Type-content', 'text/html');
//     response.statusCode = 200;

//     const {method} = request;

//     if (method === 'GET') {
//         response.end('<h1>Hello!</h1>');
//     }
//     if (method === 'PUT') {
//         response.end('<h1>Hai!</h1>');

//     }
//     if (method === 'POST') {
//         response.end('<h1>Bonjour!</h1>');

//     }
//     if (method === 'DELETE') {
//         response.end('<h1>Salam dari Binjai!</h1>');

//     }
// };
// const server = http.createServer(requestListener)

// const port = 5000;
// const host = 'localhost';

// server.listen(port, host,()=>{
//         console.log(`Server berjalan pada http://${host}:${port}`);
// });


 //Body Request
//  const http = require('http');

//  const requestListener = (request, response) => {
//      response.setHeader('Content-Type', 'text/html');
//      response.statusCode = 200;
 
//      const { method } = request;
 
//      if (method === 'GET') {
//          response.end('<h1>Hello!</h1>');
//      }
 
//      if (method === 'POST') {
//          let body = [];
 
//          request.on('data', (chunk) => {
//              body.push(chunk);
//          });
 
//          request.on('end', () => {
//              body = Buffer.concat(body).toString();
//              const { name } = JSON.parse(body);
//              response.end(`<h1>Hai, ${name}!</h1>`);
//          });
//      }
//  };
 
//  const server = http.createServer(requestListener);
 
//  const port = 5000;
//  const host = 'localhost';
 
//  server.listen(port, host, () => {
//      console.log(`Server running at http://${host}:${port}`);
//  });

 //Routing Request
//  const http = require('http');

// const requestListener = (request, response) => {
//     const { url, method } = request; // Destructure method from request

//     if (url === '/') {
//         if (method === 'GET') {
//             response.end('<h1>Ini adalah homepage</h1>');
//         } else {
//             response.end(`<h1>Halaman ini tidak bisa diakses dengan ${method} request</h1>`);
//         }
//     } else if (url === '/about') {
//         if (method === 'GET') {
//             response.end('<h1>About Page</h1>');
//         } else if (method === 'POST') {
//             let body = [];
//             request.on('data', chunk => {
//                 body.push(chunk);
//             });

//             request.on('end', () => {
//                 body = Buffer.concat(body).toString();
//                 const { name } = JSON.parse(body);
//                 response.end(`<h1>Hello!, ${name}! Welcome to About page.</h1>`);
//             });
//         } else {
//             response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
//         }
//     } else {
//         response.end('<h1>Page not found</h1>');
//     }
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });

//Response status 
const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Powered-By', 'Node.js');

    const { method, url } = request;

    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({ message: 'Ini adalah homepage' }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({ message: `Halaman ini tidak dapat diakses dengan ${method} request` }));
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({ message: 'This is about page' }));
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({ message: `Halo, ${name}! Ini adalah halaman about` }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({ message: `Halaman tidak dapat diakses menggunakan ${method} request` }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({ message: 'Page not found' }));
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
