console.log('hello world!');

var chatInput = document.getElementById('chat-input');
var chatMessageList = document.getElementById('chat-message-list');

var chatMessageTemplateString =
    document.getElementById('chat-message-template').innerHTML;
var chatMessageTemplate = Handlebars.compile(chatMessageTemplateString);

function get(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      callback(JSON.parse(this.response));
    }
  };
  request.send();
}

function post(url, payload, callback) {
  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      callback(JSON.parse(this.response));
    }
  };
  request.send(JSON.stringify(payload));
}

function createChatMessageElement(chatMessage) {
  var li = document.createElement('li');
  li.textContent = chatMessage;
  return li;
}

function renderChatMessages(chatMessages) {
  chatMessageList.innerHTML = chatMessageTemplate({chatMessages: chatMessages});
}

chatInput.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) { // enter key
    var chatMessage = chatInput.value;
    chatInput.value = '';
    post('/chat', {text: chatMessage}, renderChatMessages);
  }
});

get('/chat', renderChatMessages);

setInterval(function() {
  get('/chat', renderChatMessages);
}, 500);
