const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  tamanhos: [{
    tamanho: {
      type: String,
      required: true
    },
    preco: {
      type: Number,
      required: true
    },
  }],
  disponivel: {
    type: Boolean,
    default: true
  }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
