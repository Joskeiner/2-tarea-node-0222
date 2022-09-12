/* - en ruters/list poner la ruta que crea el listado de las compras,  poner el callback en un archivo controller
crear una gusta con el metodo HTTP POST que haga lo siguiente:
 - devolvera un objeto JSON que lo siguiente 
  {
    "nombre": "ACA VA EL NOMBRE",
    "status": "succes"
  }
  el nombre que reciba se debe enviar por req.body.nombre

http://localhost:3000/lista?zapatos=jordan&campera=nike&panatalon=zara&gorra=nike&media=nike
!ejerccio
! con una sola referencia req.query se puede lista endpoints dinamicas 
app.get("/lista", (req, res) => {
    res.json({ lista : req.query})
            
})


 */