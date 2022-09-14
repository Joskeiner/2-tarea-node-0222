/*crear un nuevo proyecto con express-generator y migrar el codigo de la clase pasada siguiendo las siguientes pautas:
 - en ruters/users poner la ruta que recibe apellido y nombre para generar un saludo, poner el callback en un archivo controller
app.get('/nombre/:juan/apellido/:perez', (req, res) => {
  res.send(`hola ${req.params.juan} ${req.params.perez}`)
}) */

const express = require('express');
const  router = express.Router();
const {saludo, saludoPost}= require("../controller/controllerSalud");

router.get("/nombre/:hola/ape/:id", saludo)

//router.post("/nombreYapellido", saludoPost)

router.post("/saludo", saludoPost)


module.exports= router;