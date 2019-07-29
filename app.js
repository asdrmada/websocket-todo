// Package Requirements
const express = require('express'),
      app     = express(),
      server  = require('http').Server(app),
      io      = require('socket.io').listen(server),
      socket  = require('socket.io-client')('http://localhost');

// Socket server set-up
io.on('connection', (socket, data) => {
    console.log('Socket Live!')

    io.emit('broadcast', {
       'list':{response:data}
    })
    
    socket.on('updates', (data) => {
        console.log('client connected')
    });

    socket.off('disconnect', () => {
        console.log('Client Disconnected')
    })
});

app.get('/', (req, res) => {
    res.send('Hello world!')
});

server.listen(process.env.PORT || 5000, process.env.IP, () => {
    console.log("The server.....it's alive!!!");
   });