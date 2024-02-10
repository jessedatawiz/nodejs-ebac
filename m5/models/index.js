const mongoose = require('mongoose');

const PedidoSchema = require('./pedido');
const PerfilSchema = require('./perfil');

const Perfil = mongoose.model('Perfil',PerfilSchema);
const Pedido = mongoose.model('Pedido',PedidoSchema);

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/ebacpizza');

};

module.exports={

    connect,
    Pedido,
    Perfil,
}