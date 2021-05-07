/**
 * 
 */
function checkBizNo(bizNo) {
	
	var regBizNo
}

function pwSuccess($elem) {
	$elem
	.next()
	.removeClass("invalid-feedback")
	.addClass("valid-feedback")
	.removeClass("glyphicon-remove")
	.addClass("glyphicon-ok")
	.html("사용가능한 비밀번호입니다")
	.show()
	.before()
	.removeClass("has-error")
	.addClass("has-success")
}
function pwError($elem) {
	$elem
	.next()
	.addClass("invalid-feedback")
	.removeClass("glyphicon-ok")
	.addClass("glyphicon-remove")
	.html("비밀번호는 최소 8 자, 최소 하나의 문자 및 하나의 숫자로 작성해야합니다.")
	.show()
	.before()
	.removeClass("has-success")
	.addClass("has-error")
	.show()
}

$(document).ready(function(){
	//패스워드 유효성 검증
	$("#pw").keyup(function(){
		var regPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		var inputPw = $(this).val();
		if (regPw.test(inputPw)) {
			pwSuccess($(this));
		} else {
			pwError($(this));
		}
	});
	//중복검사 할 것
	//사업자 번호 유효성 검증 - 하이픈 붙여도 되고 안붙여도 됨
	//**제출할 때는 하이픈 빼고 제출할 것**
	$("#bizNo").keyup(function(){
		var inputBizNo = $(this).val();
		var regBizNo = /^\d{3}-?\d{2}-?\d{5}$/;
		if (regBizNo.test(inputBizNo)) {
			$(this).next()
			.removeClass("invalid-feedback")
			.addClass("valid-feedback")
			.html("올바른 사업자 번호 형식입니다").show();
		} else {
			$(this).next()
			.removeClass("valid-feedback")
			.addClass("invalid-feedback")
			.html("사업자 번호를 다시 확인하세요").show();
		}
	});
	
	$("#corpPhoneNo").keyup(function(){
		var inputcorpPhoneNo = $(this).val();
		var regBizNo = /^\d{3}-?\d{4}-?\d{4}$/;
		if (regBizNo.test(inputBizNo)) {
			$(this).next()
			.removeClass("invalid-feedback")
			.addClass("valid-feedback")
			.html("사용 가능한 번호입니다").show();
		} else {
			$(this).next()
			.removeClass("valid-feedback")
			.addClass("invalid-feedback")
			.html("다시 확인하세요").show();
		}
	});
	
	//양식 제출 시 하이픈 빼고 숫자만 등록
	//console.log($("form[class='needs-validation']"));
	$("form[class='needs-validation']").submit(function(){
		var inputBizNo = $("#bizNo").val();
		var regBizNoWithH = /^\d{3}-\d{2}-\d{5}$/;
		var regBizNoOnlyN = /^\d{10}$/;
		console.log(/^\d{3}-\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-?\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-\d{2}-?\d{5}$/.test(inputBizNo));
		console.log(regBizNoOnlyN.test(inputBizNo));
		if (/^\d{3}-\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-?\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-\d{2}-?\d{5}$/.test(inputBizNo)) {
			var bizNo = inputBizNo.replaceAll("-", "");
			$("#bizNo").val(bizNo);
			//console.log($("#bizNo").val());
			
		}
		if (regBizNoOnlyN.test(inputBizNo)) {
			var bizNo = inputBizNo;
			$("#bizNo").val(bizNo);
			//console.log($("#bizNo").val());
			
		}
		
	});
	
});