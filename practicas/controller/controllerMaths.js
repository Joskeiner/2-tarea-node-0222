

let autorizacion = (req , res) => {
    let Validacion ={
         par : parseInt(req.query.numero)
    }
    Validacion.par % 2 == 0 ? res.send("autorizado") : res.send("no autorizado");
}


let suma = (req , res) => {
    let num1 = Number(req.params.sumaU);
    let num2 = Number(req.params.sumaI);

        num1 > 0  &&  num2 > 0 ? res.json({ resultado: num1 + num2}): res.json({erros : " no se admiten numero menores que 0"});
}

let division = ( req , res ) => {

    if ( (Number(req.params.uno) !== 0 )&& (Number(req.params.dos) !== 0 ) ){ 

        return res.json({resultado :  parseInt(req.params.uno) / parseInt(req.params.dos)});
    }
    else{
        return res.json({error: "no se puede dividir por cero"}) ;
    }
}


module.exports = {autorizacion , suma, division};