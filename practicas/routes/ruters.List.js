/* - en ruters/list poner la ruta que crea el listado de las compras,  poner el callback en un archivo controller

http://localhost:3000/lista?zapatos=jordan&campera=nike&panatalon=zara&gorra=nike&media=nike
!ejerccio
! con una sola referencia req.query se puede lista endpoints dinamicas */

const express = require('express');
const router = express.Router();
const {list} = require('../controller/controllerList');


router.get("/lista", list)

module.exports = router;
