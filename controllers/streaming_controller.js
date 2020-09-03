// for creating routes

const express = require("express");

const media = require("../models/streaming.js");

const router = express.Router();

// home page
router.get("/", (req, res) => {
  media.getAll(data => {
    res.render("index", {media: data});
  });
});

// add a show
router.post("/api/media/new", (req, res) => {
  media.add(req.body.show_name, result => {
    if (result.affectedRows === 0) {
      // No rows were affected, so there must have been an error.
      return res.status(500).end();
    } else {
      // Rows were affected. Success! Tell to reload home page
      res.status(200).redirect("/");
    }
  });
});

// update watched
router.put("/api/media/:id", (req, res) => {
  media.updateWatched(req.params.id, result => {
    if (result.changedRows === 0) {
      return res.status(500).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;