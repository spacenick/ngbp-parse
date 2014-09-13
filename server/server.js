var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.resolve(__dirname + '/../build')));
// app.use(logger())
console.log(path.resolve(__dirname + '/../build'));
app.listen(3000);