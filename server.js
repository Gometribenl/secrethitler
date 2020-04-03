const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });



http.listen(3000, function(){
  console.log('listening on *:3000');
});
const nsp = io.of('/gameroom');

nsp.on('connection', function(socket){


    console.log('a user connected');

    socket.on('disconnect', function(){

        console.log('user disconnected');
    });

    socket.on('chat message', function(message){
        // console.log('message: ' + message);
        nsp.emit('chat message', message);
    });
    socket.on('create-room',function (room) {
        socket.join(room);
        console.log("Player created and joined a room");

    });
    socket.on('join-room', function (room) {
        socket.join(room);
        console.log("joined room")
    });
// .nsp.emit('create-room', socket.client.conn.server.clientsCount);
});

