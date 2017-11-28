var User = require('../models/user');
require('../models/course');

exports.list= function(req, res, next) {
  User.find({}).populate('courses').exec(function (err, result) {
    if (err) return next(err)
    //res.json(users)
    res.render('users', { 'title': 'Express', 'data': result })
  })
}

