const express = require('express');
const path = require('path');
var app = express();
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicpath = path.join(__dirname, '../public');


var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicpath));

io.on('connection',function(socket){
  console.log('New user connected');

  socket.on('disconnect',function(){
    console.log('user disconnected');
  });

});

server.listen(port,function(){
  console.log(`server is running on port ${port}`);
})
