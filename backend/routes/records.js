const express = require("express");
const cIModels = require("../models/index");

//recordRoutes is an instance of the express router.
//We use it to define our routes.
//The router will be added as a middleware and will take control of requests starting with path /record
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

//This help conver the id from string to ObjectId for the _id
const ObjectId = require("mongodb").ObjectId;

//This section will help you select all records

recordRoutes.route("/:id").get(function(req, res){
    collection = dbo.getDb("citingInsightsDataBase").collection(req.params.id);
    //console.log(Array.isArray(eval(req.query.aggregation)));
    console.log(req.query.aggregation);
    collection.aggregate(eval(req.query.aggregation)).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result); });
})

module.exports = recordRoutes;