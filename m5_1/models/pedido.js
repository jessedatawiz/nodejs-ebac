const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Perfil', required: true },
  itens: [{
    pizza: { type: String, required: true },
    tamanho: { type: String, required: true },
    quantidade: { type: Number, required: true, min: 1 },
  }],
  status: { type: String, default: 'Em preparação', enum: ['Em preparação', 'A caminho', 'Entregue'] },
  valorTotal: { type: Number, required: true },
  criadoEm: { type: Date, default: Date.now },
  atualizadoEm: { type: Date, default: Date.now },
});

// Exporta o módulo
const Pedido = mongoose.model('Pedido', pedidoSchema);
module.exports = Pedido;