var Messages = {


  _data: {},

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.message_id] = message;
    console.log(Messages._data);
    callback(Messages.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Object.keys(Messages._data).length;
    for (let message of messages) {
      Messages._data[message.message_id] = Messages._conform(message);
    }
    // submit first message on chatterbox
    // _data: {
    // undefined: {username: aaa, text: test};
    // }
    // submit second message on chatterbox
    // undefined: {username: bbb, text: test};

    // only invoke the callback if something changed
    delete Messages._data['undefined'];
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
    // callback(Messages.items());
  },

  _conform: function(message) {
    // ensure each message object conforms to expected shape
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }

};
