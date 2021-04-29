/**
 * 
 */

$(document).ready(function(){
	$("#floatingInput").keyup(function(){
		var inputBizNo = $(this).val();
		var regBizNo = /^\d{10}$/;
		if (regBizNo.test(inputBizNo)) {
			$(this).next().next()
			.removeClass("invalid-feedback")
			.addClass("valid-feedback")
			.html("올바른 사업자 번호 형식입니다").show();
		} else {
			$(this).next().next()
			.removeClass("valid-feedback")
			.addClass("invalid-feedback")
			.html("사업자 번호를 다시 확인하세요").show();
		}
		
	})
	
});