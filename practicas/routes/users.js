const express = require('express');
const  {user}= require("../controller/controllerUser");
const  router = express.Router();


/* GET users listing. */
router.get('/', user);

module.exports = router;
