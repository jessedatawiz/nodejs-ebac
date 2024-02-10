// Importar os módulos necessários

const express = require('express');
const path = require('path');
const moongose = require('mongoose');
const {Menu, Pedido, Perfil, connect} = require('./models');

// Rotas
const routerPrincipal = require('./routes/principal');
const routerPerfil = require('./routes/perfil');
const routerMenu = require('./routes/menu');

// Inicializar o Express e Conectar ao MongoDB
const app = express();
const PORT = 3000;

app.use(express.json()); // Para parsear JSON no corpo das requisições

// Definindo as rotas
app.use('/menu', routerMenu);
app.use('/perfil', routerPerfil);
app.use('/', routerPrincipal);

app.listen(PORT, () => {
    connect();
    console.log(`Servidor rodando na porta ${PORT}`);
});
