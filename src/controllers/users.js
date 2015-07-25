'use strict';

var _ = require('lodash');

var index = function *() {
  var query = this.models.User.collection().query(function(knex) {
    knex.limit(50).offset(0).orderBy('created_at', 'asc');
  });

  var users = yield query.fetch();

  this.body = {
    users: users.toJSON()
  };
};

var show = function *() {
  var user = yield _fetchUser(this);

  this.body = {
    user: user.toJSON()
  };
};

var create = function *() {
  var user = new this.models.User(_userCreateParams(this.request.body));

  yield user.save();

  this.status = 201;
  this.body = {
    user: user.toJSON()
  };
};

var update = function *() {
  var user = yield _fetchUser(this);

  yield user.save(_userUpdateParams(this.request.body));

  this.status = 200;
  this.body = {
    user: user.toJSON()
  };
};

var destroy = function *() {
  var user = yield _fetchUser(this);

  yield user.destroy();

  this.status = 204;
};

function *_fetchUser(ctx) {
  var model = new ctx.models.User({ id: ctx.params.id });
  return yield model.fetch({ require: true });
}

function _userCreateParams(body) {
  return _.pick(body, 'email', 'password');
}

function _userUpdateParams(body) {
  return _.pick(body, 'email', 'password');
}

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
