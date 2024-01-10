const express = require('express');
const path = require('path');

const routerPerfil = require('./routes/perfil');
const routerPedidos = require('./routes/pedidos');
const routerPrincipal = require('./routes/principal');

const app = express();
const porta = 3000;

// configurando ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/perfil', routerPerfil);
app.use('/pedidos', routerPedidos);
app.use('/', routerPrincipal);

app.listen(porta, () => {
    console.log(`funciona na porta ${porta}`)
});

