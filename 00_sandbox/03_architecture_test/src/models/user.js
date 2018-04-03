const db = require('./db_connection.js');

// console.log(db);

// db.query('SHOW DATABASES', (error, result, fields) => {
//     if (error) throw error;
//
//     console.log(result);
// });

const createUsers = (request, callback) => {}
const getUsers = (request, callback) => {}
const putUsers = (request, callback) => {}
const deleteUsers = (request, callback) => {}

module.exports = {
    create: createUsers,
    get: getUsers,
    put: putUsers,
    delete: deleteUsers
}
