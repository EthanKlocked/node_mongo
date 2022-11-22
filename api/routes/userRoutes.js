//init
const express = require('express');
const router = express.Router();

//activate schema
require("../models/userModel.js"); 

//controller
userController = require('../controller/userController.js');

//methods
router.route('/')
    .get(userController.all_users)
    .post(userController.create_user);

router.route('/:userId')
    .get(userController.load_user)
    .put(userController.update_user)
    .delete(userController.delete_user);

module.exports = router;