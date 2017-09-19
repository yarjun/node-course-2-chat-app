var socket = io();

// socket.on('connect',function(){
//   console.log('connect to server');
//
//   socket.emit('createEmail',{
//     to: 'jen@email.com',
//     text: 'hey . this is arjun'
//   });
// });
// socket.on('disconnect',function(){
//   console.log('Disconnect from server');
// });
//
// socket.on('newEmail',function(email){
//   console.log('new email',email);
// });

socket.on('connect',function(){
  console.log('connected to server');

  // socket.emit('createMessage',{
  //   from: 'abc@example.com',
  //   text: 'client to server'
  // });

});

socket.on('newMessage',function(message){
  console.log('newMessage',message);

});

socket.on('disconnect',function(){
  console.log('disconnect from server');
});
