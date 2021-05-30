/**
 * 
 */
function dashBoard() {
	var page = window.open("/user/monitoring");
}
function userList() {
	var page = window.open("/user/userList");
}
$(document).ready(function(){
	//현재 메뉴 highlight
	if (location.href == "http://localhost:8080/user/monitoring") {
		$('a[href="javascript:monitoring()"]').addClass("active");
	}
	if (location.href == "http://localhost:8080/user/userList") {
		$('a[href="javascript:userList()"]').addClass("active");
	}
	
	// 자바스크립트단에서 별도로 세션생성해서 로그인/로그아웃 처리
	//var status = sessionStorage.getItem("status");
	//console.log(status);
	var status = $("input[name='bizNo']").val();
	if (status != "") {
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