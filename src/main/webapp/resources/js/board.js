/**
 * 
 */

$(document).ready(function(){
	$(function() {
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
		var today = year + "-" + month + "-" + day;
		var targetDate = $("input[name='regdate']").val();
		console.log("today : " + today);
		console.log("tDate : " + targetDate);
		
		if (targetDate == "") {
			targetDate = today;
		}
		
		$('#datetimepicker').datetimepicker({
        	defaultDate: targetDate,
            format: 'L'
        });
		
		   $('#datetimepicker').on("change.datetimepicker", function (e) {
		      var date = $('#datetimepicker').datetimepicker('viewDate').format('YYYY-MM-DD');
		      var regdate = date;
		      console.log("String regdate : " + regdate);	      
		      $("input[name='regdate']").val(regdate);

		    //form submit
			$("#dailyList").attr("action", "/user/board");
			$("#dailyList").submit()
				
		   });
		 
	});
});