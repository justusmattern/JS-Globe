// ---------- MONGODB CONNECTION --------- //

/**const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://superuser:banc1wOwS@satellitescluster.jwazr.mongodb.net/satellites?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client;**/

const MongoClient = require( 'mongodb' ).MongoClient;
const uri = "mongodb+srv://superuser:<password>@satellitescluster.jwazr.mongodb.net/satellites?retryWrites=true&w=majority";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( uri,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('satellites');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};