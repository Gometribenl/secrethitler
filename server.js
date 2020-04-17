const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fetch = require('node-fetch');


http.listen(3000, function () {
    console.log('listening on *:3000');
});
const nsp = io.of('/gameroom');

let user = new Object();


// middleware
io.use((socket, next) => {
    let token = socket.handshake.query.token;
    if (true) {

        return next();
    }
    return next(new Error('authentication error'));
});

// then
io.on('connection', (socket) => {
    let token = socket.handshake.query.token;
    // ...
});

nsp.on('connection', function (socket) {
    let token = socket.handshake.query.token;

    fetch('http://127.0.0.1:8000/user?token=' + token, {
        method: 'GET', headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => response.json())
        .then(json => user[json] = socket.id);

    console.log(user);

    console.log('a user connected');


    socket.on('disconnect', function () {

        console.log('user disconnected');
    });

    socket.on('chat message', function (message) {
        // console.log('message: ' + message);
        nsp.emit('chat message', message);
    });
    socket.on('create-room', function (room) {
        socket.join(room);
        console.log("Player created and joined a room");

    });
    socket.on('join-room', function (room) {
        socket.join(room);
        console.log("joined room")
    });
// .nsp.emit('create-room', socket.client.conn.server.clientsCount);

    socket.on('vote yes', function () {
        nsp.emit('vote yes');
    });

    socket.on('vote no', function () {
        nsp.emit('vote no');
    });
    socket.on('start voting', function () {
        nsp.emit('start voting');
    });

    socket.on('stop voting', function () {
        nsp.emit('stop voting');
    });

});
