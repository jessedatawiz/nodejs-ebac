const express = require('express');

const router = express.Router();

router.get('/', (_, res)=>{
    res.send('Olá mundo perfil!');

});

module.exports = router;