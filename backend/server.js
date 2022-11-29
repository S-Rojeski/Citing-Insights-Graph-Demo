const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 5000;
//for return input from requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
app.use(require("./routes/records"));
//get driver connection
const dbo = require("./db/conn");

const { default: mongoose, models } = require("mongoose");

//for connecting to database and listening for requests on port 5000
app.listen(port, () => { 
    //perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log('Server is running on port: ${port}')
});