const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

router.get('/criar-menu', async (req, res) => {
    try {
      // Criação de um item no menu
      await Menu.create({
        nome: "Pizza Margarita",
        descricao: "Molho de tomate, queijo mozzarella, tomates frescos e manjericão.",
        tamanhos: [
          { tamanho: "Pequena", preco: 20.00 },
          { tamanho: "Média", preco: 30.00 },
          { tamanho: "Grande", preco: 40.00 }
        ],
        disponivel: true
      });
  
      // Criação de outro item no menu
      await Menu.create({
        nome: "Pizza Calabresa",
        descricao: "Molho de tomate, queijo mozzarella, calabresa e cebola.",
        tamanhos: [
          { tamanho: "Pequena", preco: 25.00 },
          { tamanho: "Média", preco: 35.00 },
          { tamanho: "Grande", preco: 45.00 }
        ],
        disponivel: true
      });
  
      // Criação de mais um item no menu
      await Menu.create({
        nome: "Pizza Quatro Queijos",
        descricao: "Molho de tomate, queijo mozzarella, gorgonzola, parmesão e provolone.",
        tamanhos: [
          { tamanho: "Pequena", preco: 30.00 },
          { tamanho: "Média", preco: 40.00 },
          { tamanho: "Grande", preco: 50.00 }
        ],
        disponivel: true
      });
  
      res.send('Itens do menu criados com sucesso!');
    } catch (error) {
      res.status(500).send('Erro ao criar itens do menu: ' + error.message);
    }
  });

module.exports = router;
