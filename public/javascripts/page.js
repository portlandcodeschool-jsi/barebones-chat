$(function() {
  var socket = new WebSocket("ws://localhost:3001/");

  socket.onmessage = function(message){
    console.log('got a message: ')
    console.log(message)
  }

});
