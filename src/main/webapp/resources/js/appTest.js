/**
 * 
 */

//express module
const express = require('express');

//socket.io module
const socket = require('socket.io');

//node.js basic module
const http = require('http');

//express object
const app = express();

//express http server
const server = http.createServer(app);

//binding server to socekt.io
const io = socket(server);

//내가 추가한 부분
var cors = require('cors');
var corsOptions = {
		origin: 'http://localhost:8080',
		optionsSuccessStatus: 200
}

//get 방식으로 / 경로에 접속하면 실행됨
app.get('/', function(request, response, next) {
	response.header("Access-Control-Allow-Origin", "http://localhost:8080");
//app.get('/', cors(corsOptions), function(request, response) {
	console.log('유저가 / 으로 접속하였습니다');
	response.send('Hello Express Server');
})

//listen server at port 82
server.listen(82, function() {
	console.log('Server On....');
});