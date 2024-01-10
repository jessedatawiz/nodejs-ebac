const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('perfil/index', {
        nomeUsuario: "Tavares",
        endereco: "Rua das Delicias",
        pizzaSabor: "Calabresa",
        valorPago: "R$ 45,00",
        tempoEntrega: "35 minutos"
    });
});

module.exports = router;
