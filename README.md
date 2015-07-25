# koa-api

A barebones API using koa, bookshelf, postgres, mocha

## Requirements

* node >= 0.11.16 OR iojs >= 1.0.0
* postgresql

Recommended:

* [foreman](https://github.com/ddollar/foreman) for running the server locally
* [pow](http://pow.cx) to access the app at http://koa-api.dev

## Installation

```
./bin/setup
```

## Generators

koa-api comes equipped with a several generators to speed up development:

### Model Generator

```
./bin/generate model User
```

This will create a new `User` model (referencing a `users` table) named `user.js` in the `src/models` directory.

This will also create an empty migration named `<timestamp>_create_users.js` in the `src/db/migrate` directory.

### Controller Generator

```
./bin/generate controller users
```

This will create a new RESTful controller named `users` in the `src/controllers` directory.

The controller contains `index`, `show`, `create`, `update`, and `destroy` methods, as well as their routes.

### Migration Generator

```
./bin/generate migration create_users
```

This will create a new migration named `<timestamp>_create_users.js` in `src/db/migrate` directory.


### Scaffold Generator

```
./bin/generate scaffold User
```

This will run the model, migration and controller generators for a new `User` model.


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
