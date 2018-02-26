const burger = require('../models/burger.js');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  burger.selectAll(
    function(allRows) {
      let handlebarsBurgers = {
        burgers: allRows
      };
      res.render('index', handlebarsBurgers);
    }
  );
});

router.post('/burgers', function(req, res) {
  let columns = Object.keys(req.body);
  let values = Object.values(req.body);

  burger.insertOne(
    columns, 
    values, 
    function(result) {
      res.json({id: result.insertId});
    }
  );
});

router.put('/burgers/:id', function(req, res) {
  let columnsEqValues = req.body;
  let value = req.params.id;

  burger.updateOne(
    columnsEqValues,
    value,
    function(result) {
      if (result.changedRows == 0) {
        res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete('/burgers/:id', function(req, res) {
  let value = req.params.id;

  burger.deleteOne(
    value,
    function(result) {
      if (result.affectedRows == 0) {
        res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;