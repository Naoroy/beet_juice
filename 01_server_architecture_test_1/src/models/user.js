const db = require('./db_connection.js');

const createUsers = (data, callback) => {
  // if (!data) throw new error;
  const {
    nm,
    ml,
    pw,
    av,
  } = data;
  console.log(nm, ml, pw, av);
  const name = data.name ? data.name : '';
  const mail = data.mail;
  const password = data.password;
  const avatar = data.avatar ? data.avatar : '';
  const query = 'INSERT INTO User (name, mail, password, avatar)' +
    `VALUE ("${name}", "${mail}", "${password}", "${avatar}")`;
  db.query(query, (error, result) => {
    callback(error, result);
  });
};
const getUsers = (callback, id) => {
  const query = !id || typeof id !== 'number' ?
    'SELECT * FROM User' :
    `SELECT * FROM User WHERE ID = ${id}`;
  db.query(query, (error, result) => {
    if (error) throw error;
    callback(result);
  });
};
const patchUsers = (data, callback) => {
  const query = ['UPDATE User SET '];
  getUsers((currentData) => {
    const values = [];
    const currentUser = currentData[0];
    for (let prop in currentUser) {
      if (data.hasOwnProperty(prop)) {
        values.push(`${prop} = "${data[prop]}"`);
    	}
    }
    query.push(values.join(', '));
    query.push(` WHERE ID = ${currentUser.ID}`);
    db.query(query.join(''), (error, result) => {
      callback(error, result);
    });
  }, data.id);
};
const deleteUsers = (id, callback) => {
  const query = `DELETE FROM User WHERE ID = ${id}`;
  db.query(query, (error, result) => {
    callback(error, result);
  });
};

module.exports = {
  create: createUsers,
  get: getUsers,
  patch: patchUsers,
  delete: deleteUsers,
};
