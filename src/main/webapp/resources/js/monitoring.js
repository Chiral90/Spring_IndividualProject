/**
 * 
 */

$(document).ready(function(){
	
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
					radius: 200,
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
	
	// 자바스크립트단에서 별도로 세션생성해서 로그인/로그아웃 처리
	var status = sessionStorage.getItem("status");
	console.log(status);
	if (status == "signin") {
		$("#sign").html("로그아웃");
		var f = $("#form");
		$("#sign").on("click", function(e){
	  		e.preventDefault();
	  		console.log("signout");
	  		f.attr("action", "/user/signout")
	  		.attr("method", "post").submit();
	  		sessionStorage.clear();
	  	  });
	} else {
		$("#sign").html("로그인");
		var f = $("#form");
	  	$("#sign").on("click", function(e){
	  		$(this).attr("href", "/user/signin");
	  	});
	}
	
	
});
