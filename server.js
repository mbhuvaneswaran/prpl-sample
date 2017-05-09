var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname,'public'),{
  redirect : false,
  maxAge : '365 days'
}));app.listen(9000);
