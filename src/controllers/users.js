'use strict';

var _ = require('lodash');

var index = function *() {
  var records;
  var query = this.models.User.collection().query(function(knex) {
    knex.limit(50).offset(0).orderBy('created_at', 'asc');
  });

  records = yield query.fetch();

  this.body = {
    users: records.toJSON()
  };
};

var show = function *() {
  var model = new this.models.User({ id: this.params.id });
  var record = yield model.fetch();

  this.body = {
    user: record.toJSON()
  };
};

var create = function *() {
  var model = new this.models.User(_userParams(this.request.body));

  yield model.save();

  this.status = 201;
  this.body = {
    user: model.toJSON()
  };
};

function _userParams(body) {
  return _.pick(body, 'email', 'password');
}

module.exports = {
  index: index,
  show: show,
  create: create
};
