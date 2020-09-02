var express = require ("express");

var router = express.Router();

var stream = require ("../models/streaming.js");

// router.get("/", function(req, res){
//   stream.selectAll(function(data){
//     // stream.selectAll (function(media){
//       var hbsObject = {
//         media: data
//       };
//       console.log(hbsObject);
//         // console.log(media)
//         // res.render("index", media) 
//         res.render("index", hbsObject);
//     });
//   });


  router.get("/", function(req, res) {
    res.redirect("/stream");
  });

router.get("/stream", function (req, res){
  stream.selectAll(function(showData){
    res.render ("index", {show_data: showData});
  });
});

router.post("/stream/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  stream.create(req.body.show_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

router.put("/stream/:id", function(req, res) {
  stream.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});


module.exports = router;