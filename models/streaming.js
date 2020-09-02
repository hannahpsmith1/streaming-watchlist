
var orm = require ("../config/orm.js");


var stream = {
    selectAll: function(cb) { 
        orm.all("media", function(res) {
            cb(res);
        });
    },
    insertOne: function(name, cb) {
        orm.insertOne("media", [
            "show_name", "watched"
        ], [
            name, false
        ], cb);
        },

    updateOne: function(id, cb) {
        var condition = "id=" + id;
        orm.updateOne("media",  {
            watched: true
        }, condition, cb);
    }
}

module.exports = stream;