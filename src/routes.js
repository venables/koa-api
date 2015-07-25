'use strict';

var controllers = require('./controllers');
var router = require('koa-router')();

router.get('/users', controllers.users.index);
router.get('/users/:id', controllers.users.show);
router.post('/users', controllers.users.create);
router.put('/users/:id', controllers.users.update);
router.del('/users/:id', controllers.users.destroy);

router.post('/sessions', controllers.sessions.create);

module.exports = router;
