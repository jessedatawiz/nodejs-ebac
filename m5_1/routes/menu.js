const express = require('express');

const router = express.Router();

router.get('/', (_, res)=>{
    res.send('Olá mundo menu!');

});

module.exports = router;