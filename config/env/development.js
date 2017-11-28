module.exports = {
  db: function(callback) {
    var MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb://' + this.db_uri, callback)
  },

  db_uri: 'mongodb://shaolintl-class23-5718059:27017/cs3051'
};
