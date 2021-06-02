/**
 * 
 */

$(document).ready(function(){
	//상호명 유효성 검증
	$("#corpName").on("propertychange change keyup paste input", function(){
		var corpName = $(this).val();
		if (corpName == "") {
			$(this).next().show();
		} else {
			$(this).next().hide();
		}
		
	});
	//패스워드 유효성 검증
	$("#pw").on("propertychange change keyup paste input", function(){
		var regPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		var inputPw = $(this).val();
		if (regPw.test(inputPw)) {
			$(this).removeClass("is-invalid");
			$(this).addClass("is-valid");
			$("#pw").next().next()
			.removeClass("invalid-feedback")
			.addClass("valid-feedback")
			.html("등록 가능한 패스워드입니다").show();
		} else {
			$(this).removeClass("is-valid");
			$(this).addClass("is-invalid");
			$("#pw").next().next()
			.removeClass("valid-feedback")
			.addClass("invalid-feedback")
			.html("비밀번호는 최소 8 자, 최소 하나의 문자 및 하나의 숫자로 작성해야합니다").show();
		}
	});
	//중복검사 할 것
	//사업자 번호 유효성 검증 - 하이픈 붙여도 되고 안붙여도 됨
	$("#bizNo").on("propertychange change keyup paste input", function(){
		var inputBizNo = $(this).val();
		var regBizNo = /^\d{3}-?\d{2}-?\d{5}$/;
		if (/^\d{3}-?\d{2}-?\d{5}$/.test(inputBizNo)) {
			$(this).next()
			.removeClass("invalid-feedback col-lg-6")
			.addClass("valid-feedback col-lg-6")
			.html("형식확인 : 올바른 사업자 번호 형식입니다").show();
		} else {
			$(this).next()
			.removeClass("valid-feedback col-lg-6")
			.addClass("invalid-feedback col-lg-6")
			.html("형식확인 : 사업자 번호를 다시 확인하세요").show();
		}
		//중복검사
		if (
				/^\d{3}-\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-?\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-\d{2}-?\d{5}$/.test(inputBizNo) ||
				/^\d{3}-?\d{2}-?\d{5}$/.test(inputBizNo)) {
			var bizNo = inputBizNo.replaceAll("-", ""); // 자동으로 '-' 없애줌
			var chkData = {bizNo : bizNo};
			$.ajax({
				type : "post",
				url : "/user/existChk",
				data : chkData,
				success : function(result) {
					if (result != 'fail') {
						$("#bizNo").removeClass("is-invalid");
						$("#bizNo").addClass("is-valid");
						$("#bizNo").next().next()
						.removeClass("invalid-feedback col-lg-6")
						.addClass("valid-feedback col-lg-6")
						.html("중복확인 : 등록 가능한 사업자 번호입니다").show();
					} else { //실패 시 문구
						$("#bizNo").removeClass("is-valid");
						$("#bizNo").addClass("is-invalid");
						$("#bizNo").next().next()
						.removeClass("valid-feedback col-lg-6")
						.addClass("invalid-feedback col-lg-6")
						.html("중복확인 : 이미 등록된 사업자 번호입니다").show();
					}
				}
			});
		}
		if (/^\d{10}$/.test(inputBizNo)) {
			var bizNo = inputBizNo;
			$("#bizNo").val(bizNo);
			var bizNo = $("#bizNo").val();
			var chkData = {bizNo : bizNo};
			$.ajax({
				type : "post",
				url : "/user/existChk",
				data : chkData,
				success : function(result) {
					if (result != 'fail') { //성공 시 문구
						$("#bizNo").removeClass("is-invalid ");
						$("#bizNo").addClass("is-valid");
						$("#bizNo").next().next()
						.removeClass("invalid-feedback col-lg-6")
						.addClass("valid-feedback col-lg-6")
						.html("중복확인 : 등록 가능한 사업자 번호입니다").show();
					} else { //실패 시 문구
						$("#bizNo").removeClass("is-valid");
						$("#bizNo").addClass("is-invalid");
						$("#bizNo").next().next()
						.removeClass("valid-feedback col-lg-6")
						.addClass("invalid-feedback col-lg-6")
						.html("중복확인 : 이미 등록된 사업자 번호입니다").show();
					}
				}
			});
		}
		
	});
	
	$("#corpPhoneNo").on("propertychange change keyup paste input", function(){
		var inputcorpPhoneNo = $(this).val();
		var regNo = /^\d{3}-?\d{4}-?\d{4}$/;
		if (regNo.test(inputcorpPhoneNo)) {
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
	
	//양식 제출 시 
	$("form[class='needs-validation']").submit(function(){
		
		//사업자 번호 하이픈 빼고 숫자만 등록
		var inputBizNo = $("#bizNo").val();
		
		if (/^\d{3}-\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-?\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-\d{2}-?\d{5}$/.test(inputBizNo)) {
			var bizNo = inputBizNo.replaceAll("-", "");
			$("#bizNo").val(bizNo);
		}
		if (/^\d{10}$/.test(inputBizNo)) {
			var bizNo = inputBizNo;
			$("#bizNo").val(bizNo);
		}
		//전화번호 '-'빼고 제출
		var inputCorpPhoneNo = $("#corpPhoneNo").val();
		if (/^\d{3}-\d{4}-\d{4}$/.test(inputCorpPhoneNo) ||
				/^\d{3}-?\d{4}-\d{4}$/.test(inputCorpPhoneNo) ||
				/^\d{3}-\d{4}-?\d{4}$/.test(inputCorpPhoneNo)) {
			var corpPhoneNo = inputCorpPhoneNo.replaceAll("-", "");
			$("#corpPhoneNo").val(corpPhoneNo);
		}
		if (/^\d{10}$/.test(inputCorpPhoneNo)) {
			var corpPhoneNo = inputCorpPhoneNo;
			$("#corpPhoneNo").val(corpPhoneNo);
		}
		//필수 제출 항목 확인
		for (var i in $("input[required]")) {
			var target = ($("input[required]")[i]);
			if (target.value=="") {
				return false;
			}
		}
		if ( $("#lati").val()=="" ||
				$("#longi").val()=="" ) {
			$("#lati").removeClass("is-valid");
			$("#lati").addClass("is-invalid");
			$("#longi").removeClass("is-valid");
			$("#longi").addClass("is-invalid");
			return false;
		} else {
			$("#lati").removeClass("is-invalid");
			$("#lati").addClass("is-valid");
			$("#longi").removeClass("is-invalid");
			$("#longi").addClass("is-valid");
		}
		
	});
	//링크 버튼 클릭
	$("#linkBtn").click(function(){
		$("#link").attr("target", "_blank").attr("href", "https://www.google.co.kr/maps/search/" + $("#addr").val());
		$("#link").get(0).click();
	});
	
	//url 복사 시 위도 경도 자동입력
	$("#url").on("propertychange change keyup paste input", function(){
		var co = $("#url").val().split("\/")[6];
		co = co.replace("@", "");
		var lati = co.split(",")[0];
		var longi = co.split(",")[1];
		$("#lati").val(lati);
		$("#longi").val(longi);
	});
	
	//매뉴얼 버튼
	$("#manualBtn").click(function(e){
		e.preventDefault();
        $("#manual").modal("show");
    });
	$(".close").click(function(e){
		e.preventDefault();
        $("#manual").modal("hide");
    });

});