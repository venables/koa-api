'use strict';

var path = require('path');

module.exports = {
  appName: 'koa-api',

  db: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, '..', '..', 'db', 'migrations'),
      tableName: 'knex_migrations'
    }
  },

  logging: {
    format: 'common'
  },

  port: process.env.PORT || 3000,
  url: process.env.URL || 'https://koa-api.github.com'
};
