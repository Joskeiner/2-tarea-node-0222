/*crear una gusta con el metodo HTTP POST que haga lo siguiente:
 - devolvera un objeto JSON que lo siguiente 
  {
    "nombre": "ACA VA EL NOMBRE",
    "status": "succes"
  }
  el nombre que reciba se debe enviar por req.body.nombre*/


const express = require('express');
const  router= express.Router();
const {note} = require('../controller/controllerNote');


router.post('/nota', note)



module.exports = router;