'use strict';

module.exports = {
  appName: 'koa-api',

  json: {
    pretty: false,
    spaces: 2
  },

  logging: {
    format: 'common'
  },

  port: process.env.PORT || 3000,
  url: process.env.URL || 'https://koa-api.github.com'
};
