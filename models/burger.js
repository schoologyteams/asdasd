const orm = require('../config/orm.js');

const burger = {
  selectAll: function(cb) {
    orm.selectAll(
      "burgers", 
      function(allRows) {
        cb(allRows);
      }
    );
  },

  insertOne: function(columns, values, cb) {
    orm.insertOne(
      "burgers", 
      columns, 
      values, 
      function(result) {
        cb(result);
      }
    );
  },

  updateOne: function(columnsEqValues, value, cb) {
    orm.updateOne(
      "burgers", 
      columnsEqValues,
      value, 
      function(result) {
        cb(result);
      }
    );
  },

  deleteOne: function(value, cb) {
    orm.deleteOne(
      "burgers", 
      value, 
      function(result) {
        cb(result);
      }
    );
  },
};

module.exports = burger;