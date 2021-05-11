/**
 * 
 */

//1
var app = require('express')();
var http = require('http').createServer(app);
//var io = require('socket.io')(http);
//var io = require('socket.io')(http, {cors: {origin: "http://localhost:8080/"}});
var io = require("socket.io")(http, {
	cors: {
		origin: "http://localhost:8080",
		methods: ["GET", "POST"]
	}
});

app.get('/', function(req, res){});

//2  
io.on('connection', function(socket){
    console.log('클라이언트 연결됨. 소켓 id는 : ', socket.id);  //2-1
    socket.on("status", (arg1, arg2, arg3) => {
    	console.log(arg1);
    	console.log(arg2);
    	console.log(arg3);
    	if (arg1 == "warning") {
    		console.log("status" + arg1);
    		io.emit("status", "warning", arg2, arg3);
    	}
    });
    socket.on('disconnect', function(){   //2-2
        console.log('사용자 연결 종료 :', socket.id);
    });

});

//3
http.listen(3000, function(){
    console.log('서버 연결 시작');
});
