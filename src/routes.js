'use strict';

var controllers = require('./controllers');
var router = require('koa-router')();

router.get('/users', controllers.users.index);
router.get('/users/:id', controllers.users.show);

module.exports = router;
