const db = require('./db_connection.js');

const createSong = (request, callback) => {}
const getSong = (request, callback) => {}
const patchSong = (request, callback) => {}
const deleteSong = (request, callback) => {}

module.exports = {
  create: createSong,
  get: getSong,
  patch: patchSong,
  delete: deleteSong,
}
