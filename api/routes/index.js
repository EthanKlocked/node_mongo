//init
const express = require('express');
const router = express.Router();

//indexing routes
const user = require('./userRoutes.js');

//connect
router.use('/user', user);

//export
module.exports = router;