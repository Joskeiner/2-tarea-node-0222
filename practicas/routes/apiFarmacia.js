const express = require('express');
const router = express.Router();
const {crearProducto, verProducto}= require('../controller/controllerBd');


router.get('/buscar',verProducto )

router.post('/producto', crearProducto)







module.exports = router;