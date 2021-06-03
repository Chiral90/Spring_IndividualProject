/**
 * 
 */
// 자바스크립트단에서 별도로 세션생성해서 로그인/로그아웃 처리 (userHeader.jsp에 web session 변수를 저장하는 input이 있어서 굳이 js로 안해도됨
$(document).ready(function(){
	if ($("input[name='bizNo']").val() != "") {
		$("#sign").html("로그아웃");
		var f = $("#form");
		$("#sign").on("click", function(e){
	  		e.preventDefault();
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
	/*
	var status = sessionStorage.getItem("status");
	//console.log(status);
	if (status == "signin") {
		$("#sign").html("로그아웃");
		var f = $("#form");
		$("#sign").on("click", function(e){
	  		e.preventDefault();
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
	*/
	$(".board").on("click", function(e){
		e.preventDefault();
		console.log($("input[name='bizNo']").val());
		
		//오늘 날짜
		var date = new Date(); 
		var year = date.getFullYear(); 
		var month = new String(date.getMonth()+1); 
		var day = new String(date.getDate()); 
		// 한자리수일 경우 0을 채워준다. 
		if(month.length == 1){ 
		  month = "0" + month; 
		} 
		if(day.length == 1){ 
		  day = "0" + day; 
		} 
		$("input[name='regdate']").val(year + "-" + month + "-" + day);
		console.log($("input[name='regdate']").val());
		
		var f = $("#form");
		
		//form submit
		f.attr("action", "/user/board");
		f.submit();
	});
});
