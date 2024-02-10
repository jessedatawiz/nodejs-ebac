const express = require('express');
const router = express.Router();
const { Perfil } = require('../models/perfil');

// Definindo uma rota GET no router. Usamos 'async' aqui para indicar que a função
// manipuladora será assíncrona, permitindo-nos usar 'await' dentro dela.
router.get('/criar-perfis', async (req, res) => {
    try {
      // Usamos 'await' para pausar a execução até que a Promise retornada por
      // Perfil.create() seja resolvida. Isso adiciona um novo documento à coleção 'perfis'.
      // Se a operação for bem-sucedida, o documento criado é retornado.
      await Perfil.create({
        nome: "Alice Silva",
        email: "alice.silva@example.com",
        telefone: "11999999999",
        endereco: {
          rua: "Rua das Flores",
          numero: "123",
          complemento: "",
          cidade: "São Paulo",
          estado: "SP",
          cep: "01234-567"
        }
      });
  
      // Repetimos o processo para criar mais perfis. Cada chamada de 'await Perfil.create()'
      // espera a operação anterior ser concluída antes de prosseguir.
      await Perfil.create({
        nome: "Bob Santos",
        email: "bob.santos@example.com",
        telefone: "11988888888",
        endereco: {
          rua: "Avenida do Estado",
          numero: "456",
          complemento: "Apto 101",
          cidade: "São Paulo",
          estado: "SP",
          cep: "12345-678"
        }
      });
  
      await Perfil.create({
        nome: "Clara Oliveira",
        email: "clara.oliveira@example.com",
        telefone: "11977777777",
        endereco: {
          rua: "Rua dos Pinheiros",
          numero: "789",
          complemento: "Casa 2",
          cidade: "São Paulo",
          estado: "SP",
          cep: "23456-789"
        }
      });
  
      // Se todos os perfis forem criados com sucesso, enviamos uma resposta indicando sucesso.
      res.send('Perfis criados com sucesso!');
    } catch (error) {
      // Se ocorrer um erro durante qualquer uma das operações de criação, ele será capturado aqui.
      // Respondemos com um status HTTP 500 e a mensagem de erro.
      res.status(500).send('Erro ao criar perfis: ' + error.message);
    }
  });
  
  module.exports = router;