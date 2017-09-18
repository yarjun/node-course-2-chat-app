const express = require('express');
const path = require('path');
var app = express();
const http = require('http');
const socketIO = require('socket.io');

const publicpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicpath));

// io.on('connection',function(socket){
//   console.log('New user connected');
//
//   socket.emit('newEmail',{
//     from: 'arjun@example.com',
//     text: 'hey how are you',
//     createdAt: 123
//   });
//
//   socket.on('createEmail',function(email){
//     console.log('create email',email);
//   })
//
//   socket.on('disconnect',function(){
//     console.log('user disconnected');
//   });
// });



io.on('connection',function(socket){
  console.log('new user connected');

  socket.emit('newMessage',{
    from: 'arjun@example.com',
    text: 'server to client',
    createdAt: 123
  });
socket.on('disconnect',function(){
  console.log('user disconnected');
});

socket.on('createMessage',function(message){
  console.log('createMessage',message);
});

});

server.listen(port,function(){
  console.log(`server is running on port ${port}`);
})
