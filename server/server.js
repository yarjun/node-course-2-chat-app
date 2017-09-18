const express = require('express');
const path = require('path');
var app = express();

const port = process.env.PORT || 3000;
const publicpath = path.join(__dirname, '../public');
app.use(express.static(publicpath));

app.listen(port,function(){
  console.log(`server is running on port ${port}`);
})
