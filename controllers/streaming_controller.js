var express = require ("express");

var router = express.Router();

var stream = require ("../models/streaming.js");

router.get ("/", function (req,res){
    stream.all(function(data){
        var hbsObject = {
            
        }
    })
})