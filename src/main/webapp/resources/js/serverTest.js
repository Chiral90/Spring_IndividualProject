/**
 * 
 */

var express = require('express');
var app = express();
 
var http = require('http');
var server = http.Server(app);
 
var socket = require('socket.io');
var io = socket(server);
 
var port = 82;
 
app.use('/', function(req, resp) {
    resp.sendFile(__dirname + '/user/main');
});
 
io.on('connection', function(socket) {
    console.log('User Join');
});
 
server.listen(port, function() {
    console.log('Server On !');
});
