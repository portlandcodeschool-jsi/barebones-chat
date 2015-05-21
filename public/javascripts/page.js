$(function() {
  var socket = new WebSocket("ws://" + window.location.host + "/");

  socket.onmessage = function(message){
    console.log('got a message: ')
    console.log(message)
  }

});
