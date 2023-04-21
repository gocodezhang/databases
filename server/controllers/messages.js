var models = require('../models');

var headers = {
  'access-control-allow-origin': 'http://127.0.0.1:3000/',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};

headers['Content-Type'] = 'application/json';

module.exports = {
  get: function (req, res) {
    // Set response status and headers
    var statusCode = 200;
    res.writeHead(statusCode, headers);
    // get all messages data using "messages model"
    var messages = models.messages.getAll();
    // Send the response back in the format of JSON
    res.end(JSON.stringify(messages));
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // Set response status and headers
    var statusCode = 201;
    res.writeHead(statusCode, headers);
    // Get message from the request
    req.on('data', (chunk) => {
      let message = chunk.toString();
      // Insert the message into database
      models.messages.create(JSON.parse(message));
      // chunk => Buffer <20, 30, 40>
      // applied toString => '{text: sdffsf, username, roomname}'
      // JSON.parse => {text: sdffsf, username, roomname}
    });
    // Send the response back in the format of JSON

    res.end();
  } // a function which handles posting a message to the database
};
