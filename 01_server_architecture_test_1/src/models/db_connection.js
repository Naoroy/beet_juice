const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3426fegan',
    database: 'test_beet'
});
