
var orm = require ("../config/orm.js");

var stream = {
    all: function(cb){
        orm.all ("media", function(res){
            let media = {
                media:res
            }
            cb(media);
        })
        // console.log("all");
    }
}

module.exports = stream;