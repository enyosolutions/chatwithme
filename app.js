var express = require('express'),
    config = require('./config/config');

var app = express();
var io;

module.exports = require('./config/express')(app, config);

var server = app.listen(config.port, function() {
    console.log('Express server listening on port ' + config.port);
});

io = require('socket.io').listen(server);
app._io = io;

io.on('connection', function(socket) {
    socket.on("message", function(msg) {
        console.log("*********************");
        console.log("*********************");
        console.log("received:", msg);

        console.log("forwarding to ", msg.room);
        msg.timestamp = new Date().toUTCString();
        io.sockets.in(msg.room).emit("message", msg);
    });

    socket.on('room', function(room) {
        console.warn('i joined ', room);
        socket.join(room);
    });
});
