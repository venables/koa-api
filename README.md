# koa-api

A barebones API using koa, bookshelf, postgres, mocha

## Requirements

* node >= 0.11.16 OR iojs >= 1.0.0
* postgres

Recommended:

* [foreman](https://github.com/ddollar/foreman) for running the server locally
* [pow](http://pow.cx) to access the app at http://koa-api.dev

## Installation

```
./bin/setup
```

## Running

```
foreman -f Procfile.local
```

NOTE: It's a lot quicker if you `alias f=foreman -f Procfile.local` in your bashrc or zshrc

## Config

Environment-specific files are located in `src/config/environments`.

For example, development config merges `environments/development.js` into `environments/all.js`.

You can also set personal config by creating a config file ending in `.local.js`, like `development.local.js`.

It is [recommended](http://12factor.net/config) to use environment variables for configuration. Locally, you can store your environment variables in the `.env` file - this file should not be committed or used in any environment but development or test.
