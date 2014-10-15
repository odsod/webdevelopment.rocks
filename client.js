var input = document.getElementById('input');
var list = document.getElementById('list');

var todos = [
  'Write code...',
  'Write more code...',
  'Go fishing',
];

var addListItem = function(todo) {
  var listItem = document.createElement('li');
  listItem.innerText = todo;
  list.appendChild(listItem);
};

todos.forEach(addListItem);

input.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    addListItem(input.value);
  }
});

console.log('yo');
