const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
  cliente: {
    nome: {
      type: String,
      required: true,
    },
    sobrenome: {
      type: String,
      required: true,
    },
  },
  pizza: [
    {
      sabor: {
        type: String,
        required: true,
      },
      quantidade: {
        type: Number,
        required: true,
      },
      tamanho: {
        type: String,
        required: true,
        enum: ['Pequeno', 'Médio', 'Grande'],
      },
    },
  ],
  metodoDePagamento: {
    type: String,
    required: true,
    enum: ['Cartão de Crédito', 'PIX'],
  },
  total: {
    type: Number,
    required: true,
  },
  pago: {
    type: Boolean,
    default: false,
  },
  dataDoPedido: {
    type: Date,
    default: Date.now, // Atribui automaticamente a data e hora atuais ao criar o pedido
  },
});

// Exporta o módulo
const Pedido = mongoose.model('Pedido', pedidoSchema);
module.exports = Pedido;
