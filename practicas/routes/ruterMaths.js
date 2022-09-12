/* - en ruter/maths poner todas las rutas relacionadas con suma, division y corroborar si el numero es par, poner el callback en un archivo controller
 app.get('/divisor/:uno/dividendo/:dos', ( req , res ) => {
    parseInt(req.params.uno) !== 0 && parseInt(req.params.dos) !== 0  ?
                            res.json({resultado :  parseInt(req.params.uno) / parseInt(req.params.dos)})

                            : res.json({error: "no se puede dividir por cero"}) ;
})

app.get( "/numero", (req , res)=> {
    let autorizacion ={
         par : parseInt(req.query.numero)
    }
    autorizacion.par % 2 == 0 ?
        res.send("autorizado") 
        : res.send("no autorizado");
})

app.get('/suma/:sumaU/numero/:sumaI' ,(req , res) => {
    let num1 = Number(req.params.sumaU);
    let num2 = Number(req.params.sumaI);
    num1 > 0  &&  num2 > 0 ? 
        res.json({ resultado: num1 + num2})
        : res.json({erros : " no se admiten numero menores que 0"})
}) */