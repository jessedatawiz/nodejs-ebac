const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    sabor: String,
    tamanho: String,
    bordaRecheada: Boolean
});

const pedidoRecenteSchema = new mongoose.Schema({
    data: String, // Consider using Date for actual applications
    pizzas: [pizzaSchema],
    total: Number
});

const perfilSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    endereco: String,
    preferencias: [String],
    pedidosRecentes: [pedidoRecenteSchema],
    numeroPizzas: Number
});

const Perfil = mongoose.model('Perfil', perfilSchema);

module.exports = Perfil;
