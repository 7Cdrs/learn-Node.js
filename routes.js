const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tsb';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'stranger' } = request.params;
            const {lang} = request.query;

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }
            

            return `Hello, ${name}!`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Page not found';
        },
    },
];

module.exports = routes;
