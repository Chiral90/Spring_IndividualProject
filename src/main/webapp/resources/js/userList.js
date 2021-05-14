/**
 * 
 */
$(document).ready(function(){
	$("a").on("click", function(e){
		e.preventDefault();
		$("input[name='bizNo']").val($(this).attr("href"));
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
		
		$("input[name='corpName']").val($(this).parent().prev().prev().prev().prev().html());
		
		//form submit
		$("#dailyList").attr("action", "/user/dailyList");
		$("#dailyList").submit();
	});
	
});