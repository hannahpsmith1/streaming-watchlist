var express = require ("express");

var router = express.Router();

var stream = require ("../models/streaming.js");

router.get("/", function(req, res){
    stream.all (function(media){
        console.log(media)
        res.render("index", media) 
    })
  });


module.exports = router;