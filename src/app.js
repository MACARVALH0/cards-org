const express = require('express');
// const ejs = require('ejs');
const routes = require('./routes.js');

const app = express();
const SERVER_PORT = 3000;

// Define o uso de JSON como parsing único.
app.use(express.json());

// Utiliza o diretório `public/` para servir arquivos estáticos. 
app.use(express.static('public'));

// Define uma rota principal `/api` para as requisições à API.
app.use('/api', routes);

// Define a View Engine como EJS para renderização da página no servidor.
app.set("view engine", "ejs");


// Prepara a porta descrita em `SERVER_PORT`.
app.listen(SERVER_PORT, () =>
{ 
    app._router.stack.forEach((middleware) =>
    {
        if (middleware.route){ console.log(middleware.route.path, middleware.route.methods); }

        else if (middleware.name === 'router')
        {
            // Se for um router, verifica as sub-rotas.
            middleware.handle.stack.forEach((handler) =>
            {
                const route = handler.route;
                if (route){ console.log(route.path, route.methods); }
            });
        }
    });

    console.log(`\nServidor ativo na porta ${SERVER_PORT}.`);


});
