/**
 * 
 */

$(document).ready(function(){
	var status = $("#user");
	//console.log(status.val());
	if (status.val() != "") {
		$("#sign").html("로그아웃");
		var f = $("#form")
	  	//console.log(f);
	  	$("#sign").on("click", function(e){
	  		e.preventDefault();
	  		f.attr("action", "/user/signout")
	  		.attr("method", "post").submit();
	  	  })
	} else {
		$("#sign").html("로그인");
		var f = $("#form")
	  	//console.log(f);
	  	$("#sign").on("click", function(e){
	  		$(this).attr("href", "/user/signin");
	  	  })
	}
	
});