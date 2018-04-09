const db = require('./db_connection.js');

const createCollection = (request, callback) => {};
const getCollection = (request, callback) => {};
const patchCollection = (request, callback) => {};
const deleteCollection = (request, callback) => {};

module.exports = {
  create: createCollection,
  get: getCollection,
  patch: patchCollection,
  delete: deleteCollection,
};
