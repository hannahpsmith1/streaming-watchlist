
var orm = require ("../config/orm.js");


const media = {
    getAll: function(cb) {
      orm.selectAll("media", cb);
    },
    add: function(show_name, cb) {
      orm.insertOne("media", {show_name: show_name}, cb);
    },
    updateWatched: function(id, cb) {
      orm.updateOne("media", {id: id}, {watched: true}, cb);
    },
  };

module.exports = media;