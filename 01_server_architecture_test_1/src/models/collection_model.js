const db = require('./db_connection.js');

const createCollection = (author, name, callback) => {
  const query = 'INSERT INTO Collection (name, author) ' +
    `VALUE ("${name}", "${author}")`;
  db.query(query, (error, result) => {
    if (error) throw error;
    callback(result);
  });
};
const getCollection = (callback, id) => {
  try {
    const query = `SELECT * FROM Collection WHERE author = ${id}`;
    db.query(query, (error, result) => {
      callback(result);
    });
  } catch (error) {
    console.log(error);
    callback();
  }
};
// const patchCollection = (request, callback) => {};
// const deleteCollection = (request, callback) => {};

module.exports = {
  create: createCollection,
  get: getCollection,
  // patch: patchCollection,
  // delete: deleteCollection,
};
