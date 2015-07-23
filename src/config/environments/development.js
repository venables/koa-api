'use strict';

module.exports = {
  db: {
    connection: {
      host: '127.0.0.1',
      user: 'koa_api',
      database: 'koa_api_development'
    },
    debug: true
  },

  json: {
    pretty: true,
    spaces: 2
  },

  logging: {
    format: 'dev'
  },

  url: 'http://localhost:3000'
};
