const {farmacia}= require('../modelos/farmacia');


let verProducto = async (req , res) => {

        const productoF = await farmacia.find()
        res.json({productoF})

}

const crearProducto = async ( req , res) => {
    try{
        const guardar = new farmacia(req.body)
        await guardar.save()
        res.status(201).json(guardar)
    }
    catch(err) {
        res.status(501).json({
            msg : 'no se puede guardar los productos por favor intentar mas tarde ',
            err
        })
    }
}


module.exports= {verProducto, crearProducto}