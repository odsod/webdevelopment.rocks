var input = document.getElementById('input');
var list = document.getElementById('list');

var ajax = function(method, url, callback, data) {
  var request = new XMLHttpRequest();
  request.open(method, url, true);
  request.setRequestHeader('Content-Type', 'application/json');
  if (callback) {
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      callback(data);
    };
  }
  request.send(JSON.stringify(data));
};

var addListItem = function(todo) {
  var listItem = document.createElement('li');
  listItem.innerText = todo;
  list.appendChild(listItem);
};

ajax('GET', '/api/todos', function(todos) {
  todos.forEach(addListItem);
});

input.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    addListItem(input.value);
    ajax('POST', '/api/todos', null, { text: input.value });
  }
});
