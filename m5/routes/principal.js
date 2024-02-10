const express = require('express');

const router = express.Router();

router.get('/', (_, res)=>{
    res.send('Bem vindo a melhor pizzaria do mundo :)');

});

module.exports = router;