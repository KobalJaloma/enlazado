//library
const mongoose = require('mongoose');

//schema creat(DB)
let Schema = mongoose.Schema;


let pintorSchema = new Schema({
    name : {
        type : String,
        required : [true, "El nombre es necesario"]
    },
    corriente : {
        type: String,
        required : [true, "tipo de arte"]
    },
    obraNotabl : {
        type : String
    },
    muerte : {
        type : String,
        required : [true, "fecha de muerte"]
    },
    descrition : {
        type : String,
        required : [true, "pequeña descripcion de el artista"]
    },
    region : {
        type : String
    },
    portada : {
        type : String,
        required : [true, "descripcon visual"]
    }
});

// exporta el modelo de Schema con el nombre pintores 
module.exports = mongoose.model('pintores', pintorSchema);

//created by Leonardo Melendez Jaloma