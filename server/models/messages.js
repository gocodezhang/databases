var db = require('../db');

module.exports = {
  getAll: function () {
    const queryString = 'SELECT * FROM messages';
    let messages;
    db.connection.query(queryString, function(err, results) {
      messages = results;
      db.connection.end();
    });
    // db.connection.end();
    return messages;
  }, // a function which produces all the messages
  create: function (message) {
    // message = {
    //   username: 'jay',
    //   roomname: 'lobby',
    //   text: 'testing'
    // }
    const queryString = 'INSERT INTO messages SET ?';
    db.connection.query(queryString, message, function(err) {
      if (err) {
        throw err;
      } else {
        db.connection.end();
        console.log('message added!');
      }
    });
  } // a function which can be used to insert a message into the database
};
