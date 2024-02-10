const mongoose  = require('mongoose');

// Conexão com o banco de dados
const connect = () => {
    mongoose.connect('mongodb://localhost:27017/ebacpizza')
    .then(() => console.log('Conexão OK!'))
    .catch(err => console.error('Falha ao se conectar', err));
};

// Importa os modelos
const Perfil = require('./perfil');
const Pedido = require('./pedido');
const Menu = require('./menu');

// Exporta os modelos
// Aqui se usa o principio do DRY e exportamos tudo de uma vez só
module.exports = {connect, Perfil, Pedido, Menu};

