/*crear un nuevo proyecto con express-generator y migrar el codigo de la clase pasada siguiendo las siguientes pautas:
 - en ruters/users poner la ruta que recibe apellido y nombre para generar un saludo, poner el callback en un archivo controller
app.get('/nombre/:juan/apellido/:perez', (req, res) => {
  res.send(`hola ${req.params.juan} ${req.params.perez}`)
}) */

const express = require('express');
const  router = express.Router();
const {saludo}= require("../controller/controllerSalud");

router.post("/nombreYapellido", saludo)

module.exports= router;