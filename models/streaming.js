
var orm = require ("../config/orm.js");


const media = {
    getAll: function(cb) {
      orm.selectAll("media", cb);
    },
    add: function(name, cb) {
      orm.insertOne("media", {name: name}, cb);
    },
    updateWatched: function(id, cb) {
      orm.updateOne("media", {id: id}, {watched: true}, cb);
    },
  };

module.exports = media;