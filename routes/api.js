/* REST API */
var express = require('express');
var router = express.Router();

/* Fake Database */
var JsonDB = require('node-json-db');
// The second argument is used to tell the DB to save after each push
// If you put false, you'll have to call the save() method.
// The third argument is to ask JsonDB to save the database in an human readable format. (default false)
var db = new JsonDB("database", true, true);

/* Default GET */
router.get('/', function(req,res, next) {
  res.send('Please go to /api/users to get users');
});

/* GET all users. */
router.get('/users', function(req, res, next) {
  res.json(db.getData('/users'));
});

/* POST one user */
router.post('/user', function(req, res, next) {
  try {
    db.push('/users[]', req.body);
    res.json(db.getData('/users'));
  } catch (e) {
    console.error(e);
  }
});

/* DELETE user with id */
router.delete('/user/:id', function(req, res, next) {
  try {
    db.delete('/users[' + req.params.id + ']');
    res.json(db.getData('/users'));
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
