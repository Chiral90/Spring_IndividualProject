/**
 * 
 */
function goList(){
	window.location.href="/user/userList";
}
$(document).ready(function(){
	$(function() {
		
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
			$("#dailyList").attr("action", "/user/dailyList");
			$("#dailyList").submit()
				
		   });
		 
	});
});