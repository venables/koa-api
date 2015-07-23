'use strict';

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

module.exports = {
  index: index,
  show: show
};
