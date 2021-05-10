/**
 * 
 */

$(document).ready(function(){
	
	//지도
	
	
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