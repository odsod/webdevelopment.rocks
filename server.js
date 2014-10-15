var express = require('express');
var bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.json());

var todos = [
  'Write code...',
  'Write more code...',
  'Go fishing',
  'Kill all humans'
];

server.get('/api/todos', function(req, res) {
  res.send(todos);
});

server.post('/api/todos', function(req, res) {
  var newTodo = req.body.text;
  todos.push(newTodo); 
  res.send();
});

server.listen(3000);
