const mongoose = require('mongoose');

let Pintores = require('../models/Pintores');

//control var
let pintoresContoller = {};

pintoresContoller.list = (req, res) => {
    //se realiza una busqueda del modelo pintor
    Pintores.find({})
        .limit(20)
        .skip(0)
        .exec((error, pintor) => {
            if(error) {
                console.log('Error founded: ' + error);
            }
            //pintores hereda a busqueda anterior el cual adquiere una key llamada "Base"
            res.render('../views/index', {
                pintores : pintor,
                title : "Top Pintores",
                year : 2020
            });
        })
};

module.exports = pintoresContoller;