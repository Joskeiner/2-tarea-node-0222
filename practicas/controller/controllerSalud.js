


let saludo = (req, res) => {
  let nombre = req.params.nombre;
  let apellido = req.params.apellido;
    res.send(`hola ${ req.query.nombre } ${req.query.apellido}`)
  }









module.exports = {saludo}