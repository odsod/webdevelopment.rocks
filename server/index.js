var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var chatMessages = [
  'yo from the server',
  'HEJJ?'
];

app.get('/chat', function (req, res) {
  res.send(chatMessages);
});

app.post('/chat', function(req, res) {
  chatMessages.unshift(req.body.text);
  res.send(chatMessages);
});

app.listen(3000, function () {
  console.log('Chat server listening on port 3000!');
});
