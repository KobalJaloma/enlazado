//import librarys
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//app create
const app = express();

//partials frame
app.set('view engine', 'hbs');

//static route
app.use(express.static(__dirname + '/public'));

//partial route
hbs.registerPartials(__dirname + '/views/partials');

//routes
let pintorRoute = require('./routes/pintorRoute');
app.use('/', pintorRoute);

//static routes

app.get('/alexandre', (req,res) => {
    res.render('alexandre', {
    	title : 'Alexandre Cabanel',
		name : 'Alexandre Cabanel',
		css : 'styles/art.css',
    	imgProfile : 'images/AlexandreCabanel_perfil.jpg',
    	namePintura1 : 'Phaedra',
    	imgPintura1 : 'images/AlexandreCabanel.jpg',
    	namePintura2 : 'Phaedra',
    	imgPintura2 : 'images/AlexandreCabanel_1.jpg',
    	namePintura3 : 'albaydé',
    	imgPintura3 : 'images/AlexandreCabanel_2.jpg',
    	namePintura4 : 'Fallen Angel',
    	imgPintura4 : 'images/AlexandreCabanel_3.jpg',
    	namePintura5 : 'Portrait of Countess de Koller (nee Maria Riznich)',
    	imgPintura5 : 'images/AlexandreCabanel_4.jpg'
    });
});

app.get('/jan', (req,res) => {
    res.render('jan', {
    	title : 'Jan van Eyck',
		name : 'Jan van Eyck',
		css : 'styles/art.css',
    	imgProfile : 'images/JanVan_1.jpg',
    	namePintura1 : 'Poliptico de Gante',
    	imgPintura1 : 'images/JanVan.jpg',
    	namePintura2 : 'Retrato de hombre con turbante',
    	imgPintura2 : 'images/JanVan_1.jpg',
    	namePintura3 : 'Retrato de Giovanni Arnolfini y su esposa (Arnolfini Portrait)',
    	imgPintura3 : 'images/JanVan_2.jpg',
    	namePintura4 : 'Virgen del canciller Rolin (Madonna of Chancellor Rolin)',
    	imgPintura4 : 'images/JanVan_3.jpg',
    	namePintura5 : 'Retrato de Margarita van Eyck',
    	imgPintura5 : 'images/JanVan_4.jpg'
    });
});

app.get('/max', (req,res) => {
    res.render('max', {
    	title : 'Max Ernst',
		name : 'Max Ernst',
		css : 'styles/art.css',
    	imgProfile : 'images/MaxErnst_perfil.jpg',
    	namePintura1 : 'Celebes',
    	imgPintura1 : 'images/MaxErnst.jpg',
    	namePintura2 : 'A Friends Reunion',
    	imgPintura2 : 'images/MaxErnst_1.jpg',
    	namePintura3 : 'The Angel of the home or the Triumph of Surrealism',
    	imgPintura3 : 'images/MaxErnst_2.jpg',
    	namePintura4 : 'Loplop Introduces Loplop',
    	imgPintura4 : 'images/MaxErnst_3.jpg',
    	namePintura5 : 'Ubu Imperator',
    	imgPintura5 : 'images/MaxErnst_4.jpg'
    });
});

app.get('/omar', (req,res) => {
    res.render('omar', {
    	title : 'Omar Ryyan',
		name : 'Omar Ryyan',
		css : 'styles/art.css',
    	imgProfile : 'images/OmarRayyan_perfil.jpg',
    	imgPintura1 : 'images/OmarRayyan.jpg',
    	imgPintura2 : 'images/OmarRayyan_1.jpg',
    	imgPintura3 : 'images/OmarRayyan_2.jpg',
    	imgPintura4 : 'images/OmarRayyan_3.jpg',
    	imgPintura5 : 'images/OmarRayyan_4.jpg'
    });
});

//mongoose conection
mongoose.promise = global.promise;
const cadena = 'mongodb+srv://public:12345@melendezleonardo-tudfp.mongodb.net/pagina?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('conexion establecida');
    }).catch((err) => {
        console.log("conexion fallida: " + err);
    });

    
//port lstener
app.listen(process.env.PORT || 3000, ()=>{
    console.log('conected to  Port');
});




