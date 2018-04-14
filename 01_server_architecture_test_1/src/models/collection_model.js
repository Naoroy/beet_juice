const db = require('../db_connection.js');

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
    callback();
  }
};
const deleteCollection = (id, callback) => {
  const query = `DELETE FROM Collection WHERE ID="${id}"`;
  db.query(query, (error, result) => {
    callback(result);
  });
};

module.exports = {
  create: createCollection,
  get: getCollection,
  delete: deleteCollection,
};
