var express = require('express');
var router = express.Router();

var users = require('../controllers/user')

/* GET users listing. */
router.get('/', users.list)

// URL /user/create
router.get('/create', users.create_get);
router.post('/create', users.create_post);

module.exports = router;
