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
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);

});

socket.on('newLocationMessage',function(message){
  var li = jQuery('<li></li>');
  var a  = jQuery('<a target="_blank">My current location</a>');

  li.text(`${message.from}: `);
  a.attr('href',message.url);

  li.append(a);
  jQuery('#messages').append(li);
})

socket.on('disconnect',function(){
  console.log('disconnect from server');
});

// socket.emit('createMessage',{
//   from: 'Frank',
//   text: 'hi'
// },function(data){
//   console.log('Got it',data);
// });

jQuery('#message-form').on('submit',function(e){
  e.preventDefault();

  socket.emit('createMessage',{
    from: 'User',
    text: jQuery('[name=message]').val()
  },function(){

  });
});

var locationButton = jQuery('#send-location');

locationButton.on('click',function(){
  if(!navigator.geolocation){
    return alert('Geolocation not sported by your browser');
  }

  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    socket.emit('createLocationMessage',{
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  },function(){
    alert('Unable to fetch location');
  });

});
