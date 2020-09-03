

const connection = require("./connection.js");

const orm = {
  selectAll: function(tableName, cb) {
    connection.query("SELECT * FROM ??", tableName, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(tableName, data, cb) {
    connection.query("INSERT INTO ?? SET ?", [tableName, data], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(tableName, whereCondition, newData, cb) {
    connection.query("UPDATE ?? SET ? WHERE ?", [tableName, newData, whereCondition], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

};

module.exports = orm;