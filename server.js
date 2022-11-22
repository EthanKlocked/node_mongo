//init
require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8083;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./api/routes");

//Node Native Promise
mongoose.Promise = global.Promise; 

//mongodb connect
mongoose.connect(process.env.MONGO_URI).then(
    (res) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

//middleware
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//route
app.use('/', routes);

//server ready
app.listen(port, () => {
    console.log(`API server started on : ${port}`);
});
