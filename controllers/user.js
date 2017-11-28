var User = require('../models/user');
require('../models/course');

exports.list= function(req, res, next) {
  User.find({}).populate('courses').exec(function (err, result) {
    if (err) return next(err)
    //res.json(users)
    res.render('users', { 'title': 'Express', 'data': result })
  })
}

exports.create_get = function(req, res, next) {
  res.render('user_form', { title: 'Create User' });
}

exports.create_post = function(req, res, next) {

  console.log(req.body)
  var user = new User(req.body);

  //Check that the name field is not empty
  req.checkBody('login', 'Login required').notEmpty();
  req.checkBody('password', 'Password required').notEmpty();

  //Trim and escape the name field.
  req.sanitize('login').escape();
  req.sanitize('login').trim();

  var errors = req.validationErrors();
  if (errors){
    res.render('user_form', { title: 'Create User',
      user: user, errors: errors});
    return
  }

  user.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.render('success', { title: 'Success', message: 'User created successfully' });
    }
  });
}
