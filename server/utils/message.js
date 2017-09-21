var moment = require('moment');


function generatemessage(from,text){
  return {
    from,
    text,
    createdAt: moment().valueOf()
  };
};

function generateLocationmessage(from,latitude,longitude){

  return {
          from,
          url: `https://www.google.com/maps?q=${latitude},${longitude}`,
          createdAt: moment().valueOf()
         }
};

module.exports = {generatemessage,generateLocationmessage};
