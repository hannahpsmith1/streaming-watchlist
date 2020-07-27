
var orm = require ("../config/orm.js");

// var stream = {
//     all: function(cb){
//         orm.all ("media", function(res){
//             let media = {
//                 media:res
//             }
//             cb(media);
//         })
//         // console.log("all");
//     }
// }


var stream = {
    selectAll: function(cb) { 
        orm.selectAll("media", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("media", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("media", objColVals, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = stream;