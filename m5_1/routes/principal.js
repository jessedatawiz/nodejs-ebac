// Configuração Inicial
const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');
const Pedido = require('../models/pedido');
const Perfil = require('../models/perfil');

// Rota principal
router.get('/', async (req, res) => {
    try {
      const pedidos = await Pedido.find().populate('cliente'); // Popula os dados do cliente nos pedidos
      const itensMenu = await Menu.find();
      const perfisClientes = await Perfil.find();
  
      res.json({
        pedidos,
        itensMenu,
        perfisClientes
      });
    } catch (error) {
      res.status(500).send('Erro ao buscar informações: ' + error.message);
    }
  });

// Exportação
module.exports = router;