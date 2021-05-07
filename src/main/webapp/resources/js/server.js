/**
 * 
 */

var express = require('express');
var app = express();
 
var http = require('http');
var server = http.Server(app);
 
var socket = require('socket.io');
var io = socket(server);
 
var port = 8006;
 
app.use('/', function(req, resp) {
    resp.sendFile(__dirname + '/user/monitoring');
});
 
io.on('connection', function(socket) {
    console.log('User Join');
});
 
server.listen(port, function() {
    console.log('Server On !');
});
