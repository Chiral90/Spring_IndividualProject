/**
 * 
 */

$(document).ready(function(){
	$(function() {
		$('#datetimepicker4').datetimepicker({
        	defaultDate: moment(),
            format: 'L'
        });
		
		   $('#datetimepicker4').on("change.datetimepicker", function (e) {
		      var date = $('#datetimepicker4').datetimepicker('viewDate').format('YYYY-MM-DD');
		      var regdate = "%" + date + "%"
		      console.log("String regdate : " + regdate);
		      
		      var data = {regdate : regdate};
				$.ajax({
					type : "post",
					url : "/user/specificDate",
					data : data,
					success : function(result) {
						
						//$(".table-responsive").load(location.href + " .table-responsive");
						console.log("new page");
					}
				});
		   });
		 
	});
});

