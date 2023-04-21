var db = require('../db');

module.exports = {
  getAll: function () {
    const queryString = 'SELECT DISTINCT username FROM messages';
    let users;
    db.connection.query(queryString, function(err, results) {
      users = results;
      db.connection.end();
    });
    return users;
  },
  create: function (user) {
    console.log('model user called');
    const queryString = `INSERT INTO messages (username) VALUES (${user})`;
    db.connection.query(queryString, function(err) {
      if (err) {
        throw err;
      } else {
        db.connection.end();
        console.log('new user added');
      }
    });
  }
};
