// Importando os pacotes necessários
const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido'); 
const Perfil = require('../models/perfil'); // Será necessário para referenciar os perfis dos clientes

// Definindo a rota para criar os pedidos
router.get('/criar-pedidos', async (req, res) => {
    try {
      // Simula a busca dos IDs dos clientes já existentes. Na prática, você teria que buscar
      // ou saber os IDs dos perfis dos clientes para criar os pedidos.
      const clientes = await Perfil.find().limit(3);
      if (clientes.length < 3) {
        return res.status(400).send('Não há perfis suficientes para criar pedidos.');
      }
  
      await Pedido.create({
        cliente: clientes[0]._id,
        itens: [
          { pizza: "Margarita", tamanho: "Média", quantidade: 2 },
          { pizza: "Calabresa", tamanho: "Grande", quantidade: 1 }
        ],
        status: "Em preparação",
        valorTotal: 50.00
      });
  
      await Pedido.create({
        cliente: clientes[1]._id,
        itens: [
          { pizza: "Portuguesa", tamanho: "Média", quantidade: 1 }
        ],
        status: "A caminho",
        valorTotal: 25.00
      });
  
      await Pedido.create({
        cliente: clientes[2]._id,
        itens: [
          { pizza: "Quatro Queijos", tamanho: "Grande", quantidade: 1 }
        ],
        status: "Entregue",
        valorTotal: 30.00
      });
  
      res.send('Pedidos criados com sucesso!');
    } catch (error) {
      res.status(500).send('Erro ao criar pedidos: ' + error.message);
    }
  });

// Exportar o Router
module.exports = router;
