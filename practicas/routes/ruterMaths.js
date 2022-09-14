/* - en ruter/maths poner todas las rutas relacionadas con suma, division y corroborar si el numero es par, poner el callback en un archivo controller
 app.get('/divisor/:uno/dividendo/:dos', ( req , res ) => {
    parseInt(req.params.uno) !== 0 && parseInt(req.params.dos) !== 0  ?
                            res.json({resultado :  parseInt(req.params.uno) / parseInt(req.params.dos)})

                            : res.json({error: "no se puede dividir por cero"}) ;
})*/
const express = require('express');
const  router = express.Router();
const {autorizacion ,suma ,division} = require('../controller/controllerMaths');

router.get( '/numero', autorizacion)

router.get('/suma/:sumaU/numero/:sumaI' , suma)


router.get('/divisor/:uno/dividendo/:dos', division)

module.exports = router;