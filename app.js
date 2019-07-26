const express = require('express'),
      app     = express(),
      http    = require('http').createServer(app),
      io      = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('Hello world!')
});

io.on('connection', (socket) => {
    console.log('a user has conencted!')
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("The server.....it's alive!!!");
   });