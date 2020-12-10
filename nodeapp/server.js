var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


//server configuration
app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("Calling rest api");
  var person={firstName:'Aishwarya',lastName:'Jadhav',age:25};
  res.send(person);
});

 
var server = app.listen(8083, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("******Server listening at 8081******", host, port)
})