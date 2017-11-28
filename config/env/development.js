module.exports = {
  db: function(callback) {
    var MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb://localhost:27017/cs3051', callback)
  },

  db_uri: 'mongodb://localhost:27017/cs3051'
};
