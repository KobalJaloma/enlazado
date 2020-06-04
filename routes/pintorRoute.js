const express = require('express');

// import the controller of  the route
let pintorController = require('../controllers/PintorController.js');

// declarate the class router to routing the controller
let router = express.Router();

router.get('/', pintorController.list);

module.exports = router;