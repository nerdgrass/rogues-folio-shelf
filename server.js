var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname+'/'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});
console.log('Server running, application available at localhost:1337')
app.listen(1337);
