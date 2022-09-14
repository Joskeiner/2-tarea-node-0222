


let saludo = (req, res) => {
 // http://localhost:3000/userSaludo/nombre/joskeiner/ape/dutran
    res.send(`hola ${ req.params.hola } ${req.params.id}`)
  }



 
 //http://localhost:3000/userSaludo/saludo
  let saludoPost = (req, res) => {

    res.send(`hola ${ req.body.saludo } ${req.body.apellido}`)
  }





module.exports = {saludo, saludoPost}