/**
 * 
 */

$(document).ready(function(){
	//사업자 번호 유효성 검사
	$("#floatingInput").keyup(function(){
		var inputBizNo = $(this).val();
		var regBizNo = /^\d{10}$/;
		if (	(/^\d{10}$/.test(inputBizNo) ||
				/^\d{3}-\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-?\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-\d{2}-?\d{5}$/.test(inputBizNo)) && inputBizNo != "admin") {
			$(this).next().next()
			.removeClass("invalid-feedback")
			.addClass("valid-feedback")
			.html("올바른 사업자 번호 형식입니다").show();
		} else if (inputBizNo == "admin") {
			$(this).next().next()
			.removeClass("invalid-feedback")
			.addClass("valid-feedback")
			.html("관리자 계정입니다").show();
		}		
		else {
			$(this).next().next()
			.removeClass("valid-feedback")
			.addClass("invalid-feedback")
			.html("사업자 번호를 다시 확인하세요").show();
		}
		
	});
	
	//양식 제출 시 하이픈 빼고 숫자만 등록
	//console.log($("form[class='needs-validation']"));
	$("form[class='needs-validation']").submit(function(e){
		var inputBizNo = $("#floatingInput").val();
		//var regBizNoWithH = /^\d{3}-\d{2}-\d{5}$/;
		//var regBizNoOnlyN = /^\d{10}$/;
		
		if (/^\d{3}-\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-?\d{2}-\d{5}$/.test(inputBizNo) ||
				/^\d{3}-\d{2}-?\d{5}$/.test(inputBizNo)) {
			var bizNo = inputBizNo.replaceAll("-", "");
			$("#floatingInput").val(bizNo);
			//console.log($("#bizNo").val());
			//session 생성
			//sessionStorage.setItem("status", "signin");
			
		}
		if (/^\d{10}$/.test(inputBizNo)) {
			var bizNo = inputBizNo;
			$("#floatingInput").val(bizNo);
			//console.log($("#bizNo").val());
			//session 생성
			//sessionStorage.setItem("status", "signin");
		}
		if (inputBizNo == "admin") {
			//sessionStorage.setItem("status", "signin");
		}
		
	});
	
	//remember me 클릭 시 쿠키에 사업자 번호 저장
	// 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 없으면 공백으로 들어감.
    var fpId = getCookie("fpId");
    $("#floatingInput").val(fpId); 
     
    if($("#floatingInput").val() != ""){ // 그 전에 ID를 저장해서 처음 페이지 로딩 시, 입력 칸에 저장된 ID가 표시된 상태라면,
        $("#idSaveCheck").attr("checked", true); // ID 저장하기를 체크 상태로 두기.
    }
     
    $("#idSaveCheck").change(function(){ // 체크박스에 변화가 있다면,
        if($("#idSaveCheck").is(":checked")){ // ID 저장하기 체크했을 때,
            setCookie("fpId", $("#floatingInput").val(), 7); // 7일 동안 쿠키 보관
        }else{ // ID 저장하기 체크 해제 시,
            deleteCookie("fpId");
        }
    });
     
    // ID 저장하기를 체크한 상태에서 ID를 입력하는 경우, 이럴 때도 쿠키 저장.
    $("#floatingInput").keyup(function(){ // ID 입력 칸에 ID를 입력할 때,
        if($("#idSaveCheck").is(":checked")){ // ID 저장하기를 체크한 상태라면,
            setCookie("fpId", $("#floatingInput").val(), 7); // 7일 동안 쿠키 보관
        }
    });

	
});

function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}
 
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}
 
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}