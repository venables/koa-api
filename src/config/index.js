'use strict';

var path = require('path');

try {
  require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') }).load();
} catch(e) {}

var _ = require('lodash');
var env = process.env.NODE_ENV || 'development';
var configAll = loadConfig('all');
var configEnv = loadConfig(env);
var configLocal = loadConfig(env + '.local');

function loadConfig(env) {
  try {
    return require('./environments/' + env);
  } catch(err) {
    return {};
  }
}

module.exports = _.merge({}, configAll, configEnv, configLocal, { env: env });
