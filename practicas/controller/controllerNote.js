
let note = (req, res) => {
    res.json({
        "nombre": req.body.nombre,
        "status": "succes"
      })
}





module.exports = {note}