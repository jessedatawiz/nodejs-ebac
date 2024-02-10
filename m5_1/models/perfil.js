const mongoose = require('mongoose');

const perfilSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: String,
  endereco: {
    rua: String,
    numero: String,
    complemento: String,
    cidade: String,
    estado: String,
    cep: String,
  },
  criadoEm: { type: Date, default: Date.now },
});

const Perfil = mongoose.model('Perfil', perfilSchema);
module.exports = Perfil;
