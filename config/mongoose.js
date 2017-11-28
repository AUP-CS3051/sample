var config = require('./config'),
  mongoose = require('mongoose');
mongoose.connect(config.db_uri, {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
