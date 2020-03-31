var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){

  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(message){
    io.emit('chat message', message);
  });

  socket.on('vote yes', function(){
    io.emit('vote yes');
  });

  socket.on('vote no', function(){
    io.emit('vote no');
  });

  socket.on('start voting', function(){
    io.emit('start voting');
  });

  socket.on('stop voting', function(){
    io.emit('stop voting');
  });
  
});