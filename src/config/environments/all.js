'use strict';

module.exports = {
  appName: 'koa-api',

  logging: {
    format: 'common'
  },

  port: process.env.PORT || 3000,
  url: process.env.URL || 'https://koa-api.github.com'
};
