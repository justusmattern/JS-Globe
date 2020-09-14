var express = require('express');
var router = express.Router();
var request = require('request');
var client = require('../database');
const assert = require('assert');
var mongoUtil = require( '../database' );
var db = mongoUtil.getDb();



router.get('/', function(req, res, next) {

  /**client.connect(err => {
    assert.equal(null, err);
    console.log("Connected correctly to server");
  
    const db = client.db('satellites');
  
    findDocuments(db, function() {
      client.close();
    });
  }); 
*/
db.collection('satellites').find({}, {}).toArray()
  .then(items =>{
    console.log(items[0].name+items[1].name);
  });

    res.render('iss', { title: 'Express' });
  })

module.exports = router;



/*const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('satellites');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}*/



