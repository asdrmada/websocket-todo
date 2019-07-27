const express = require('express'),
      app     = express(),
      server  = require('http').createServer(app),
      io      = require('socket.io').listen(server);
      socket  = require('socket.io-client')('http://localhost');

io.on('connection', (socket) => {
    console.log('Socket Live!')
    
    socket.on('connect', () => {
        console.log('client connected')
    });
    socket.on('event', (data) => {
        console.log('List updated!')
    })
    socket.off('disconnect', () => {
        console.log('Client Disconnected')
    })
});

app.get('/', (req, res) => {
    res.send('Hello world!')
});

server.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("The server.....it's alive!!!");
   });