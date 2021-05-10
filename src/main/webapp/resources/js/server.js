/**
 * 
 */

//app이라는 변수에 express를 담아줌
var app = require('express')();
//http 변수에 http를 담아두고 Server함수에 app을 담아줌
var http = require('http').Server(app);

var io = require('socket.io')(http);
//var io = require('socket.io')(app);
/*
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
});
*/

//페이지를 get으로 요청을 했을때.
app.get('/', function (req, res) {
	//acao
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    //아래와 같은 메시지를 출력
    res.send('<h1>안녕하세요 "/" 경로 입니다.</h1>');
});
 
io.on('connection', function(socket){
	  console.log('한 명의 유저가 접속을 했습니다.');
	});

//http는 82번 포트를 사용한다.
http.listen(82, function () {
//app.listen(82, function () {
    //콘솔창에 출력
    console.log('listening on port 82');
});
