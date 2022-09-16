const mongoose = require('mongoose');

const schema = mongoose.Schema;

const farmaciaSchema = new schema({

    nombre:{
        type:String,
        required:true,
        unique:true
    },

    precio:{ 
        type:Number,
        required:true
    },

    descripcion:{
        type:String
    },

    contenidoUni:{ 
        type:Number,
        required:true
    },
    GrPildora:{
        type:String,
        required:true
    },
    decuento:{
        type:Boolean
    },
});

const farmacia = mongoose.model('farmacia', farmaciaSchema)

module.exports = {farmacia}