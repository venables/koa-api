'use strict';

var controllers = require('./controllers');
var router = require('koa-router')();

router.get('/users', controllers.users.index);
router.get('/users/:id', controllers.users.show);
router.post('/users', controllers.users.create);

module.exports = router;
