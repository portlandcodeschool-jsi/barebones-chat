$(function() {
  var socket = new WebSocket("ws://" + window.location.host + "/");

  socket.addEventListener('message', function(message){
    console.log('got a message: ')
    console.log(message)
  });

});
