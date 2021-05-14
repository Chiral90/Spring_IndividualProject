/**
 * 
 */

$(document).ready(function(){
	/*
	//웹 소켓 이벤트 리스너
	var socket = io('http://localhost:3000/');
	//status의  argument1로부터 조건 판단
	socket.on("status", (arg1, arg2, arg3) => {
		if (arg1 == "warning") {
			
			console.log("status : " + arg1);
			console.log("location : " + arg2 + ", " + arg3);
			
			console.log("log update....");
			var updateLog = $("#log").load(location.href + " #log"); //이상체온 검출 테이블만 새로고침
			var loc = new naver.maps.LatLng(arg2, arg3)
			
			var map = new naver.maps.Map('map', { // 지도이동
				center: loc
			});
			
			var marker = new naver.maps.Marker({
				position: loc,
				map: map
			})
			
			var blink = setInterval(function() {
				console.log("1초마다 점멸");
				var circle = new naver.maps.Circle({ // 원 생성
					map: map,
					center: loc,
					radius: 2000,
					fillColor: 'crimson',
					fillOpacity: 0.8
				});
				setTimeout(function() { // 1초 후 제거
					$("path").remove();
				}, 1000);
			}, 2000);
			setTimeout(function() {
				clearTimeout(blink);
			}, 6500);
		}
		
		
	});	
	*/
	
	//data~ajax까지 function으로 만들어서 코드 간소화할 것
	var completedBtn = $(".btn-success");
	completedBtn.click(function(){
		//console.log($(this).parent().children("input").val());
		var data = {
				bno : $(this).parent().children("input").val(),
				status : "완료"
		}
		$.ajax({
			type: "post",
			url: "/user/updateStatus",
			data: data,
			success: function(result) {
				//to do
			},
			error: function(e) {
				console.log(e);
			}
		});
		
		$(this).parent().next().html("완료")
		//console.log($(this).parent().next().html());
		//var updateLog = $("#log").load(location.href + " #log");
	});
	var waitedBtn = $(".btn-warning");
	waitedBtn.click(function(){
		var data = {
				bno : $(this).parent().children("input").val(),
				status : "대기"
		}
		$.ajax({
			type: "post",
			url: "/user/updateStatus",
			data: data,
			success: function(result) {
				//to do
			},
			error: function(e) {
				console.log(e);
			}
		});
		$(this).parent().next().html("대기");
		//var updateLog = $("#log").load(location.href + " #log");
	});
	var failBtn = $(".btn-danger");
	failBtn.click(function(){
		var data = {
				bno : $(this).parent().children("input").val(),
				status : "불응"
		}
		$.ajax({
			type: "post",
			url: "/user/updateStatus",
			data: data,
			success: function(result) {
				//to do
			},
			error: function(e) {
				console.log(e);
			}
		});
		$(this).parent().next().html("불응");
		//var updateLog = $("#log").load(location.href + " #log");
	});
	/*
	var tds = $("td");
	console.log(tds);
	tds.forEach((td) => (console.log(td.html)));
	*/
	/*console.log($("td").html() == "신규")
	if ($("td").html() == "신규" || $("td").html() == "불응") {
		console.log($(this).parent());
		$(this).parent().css({"background-color" : "red"});
	}
	*/
});
