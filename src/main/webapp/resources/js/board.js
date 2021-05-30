/**
 * 
 */

$(document).ready(function(){
	$(function() {
		console.log($("input[name='regdate']").val());
		if ($("input[name='regdate']").val() == "") {
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
		}
		$('#datetimepicker').datetimepicker({
        	defaultDate: $("input[name='regdate']").val(),
            format: 'L'
        });
		
		   $('#datetimepicker').on("change.datetimepicker", function (e) {
		      var date = $('#datetimepicker').datetimepicker('viewDate').format('YYYY-MM-DD');
		      var regdate = date;
		      console.log("String regdate : " + regdate);	      
		      $("input[name='regdate']").val(regdate);

		    //form submit
			$("#form").attr("action", "/user/board");
			$("#form").submit()
				
		   });
		 
	});
});