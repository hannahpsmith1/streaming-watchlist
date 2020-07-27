var express = require ("express");

var router = express.Router();

var stream = require ("../models/streaming.js");

router.get("/", function(req, res){
  stream.selectAll(function(data){
    // stream.selectAll (function(media){
      var hbsObject = {
        media: data
      };
      console.log(hbsObject);
        // console.log(media)
        // res.render("index", media) 
        res.render("index", hbsObject);
    });
  });

// router.post("/api/media", function(req, res) {
//     media.create([
//       "name", "watched"
//     ], [
//       req.body.name, req.body.watched
//     ], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });


module.exports = router;