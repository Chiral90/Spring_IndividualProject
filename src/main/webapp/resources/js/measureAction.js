	/**
 * 
 */
$(document).ready(function(){
	//소켓
	
	//console.log(window.parent.cnt.value); //변수로 재측정 여부 확인하면 1로 리셋됨
		
	//아두이노 구현 시 -> input value 변화 감지 (on("propertychange change keyup paste input", function() {})해서 parent form submit (target="iframe" action="/user/measureAction")   
	
	//id로 받아오는 것 같음
	//console.log($(top.document).find("svg")[0]);
	//$(top.document).find("rect")[0].removeAttribute("fill");
	//$(top.document).find("rect")[0].setAttribute("background-image", "url('/resources/img/qr.jpg')");

	//사람이 결과를 볼 수 있어야 하므로 ajax를 통해 action 후 2초 setTimeout

	if ( // 방문객 정보가 입력되면
			window.parent.name.value != "" &&
			window.parent.addr.value != "" &&
			window.parent.phoneNo.value != "" &&
			window.parent.temp.value == ""
	) {
		qr();
	}
	
	if ( // 체온 값이 첫 번째 입력되면
			window.parent.name.value != "" &&
			window.parent.addr.value != "" &&
			window.parent.phoneNo.value != "" &&
			window.parent.temp.value != ""
	) {
		measure();
		
			if (parseFloat(window.parent.temp.value) > 35.5 && parseFloat(window.parent.temp.value) < 37.5 && window.parent.cnt.value == 1) { // 정상범위이면
				console.log("초회차 정상");
				setTimeout(function(){
					ok();
				}, 2000);
							
			
			} else { // 비정상이면
					if (window.parent.cnt.value == 1){
						console.log("here? cnt : " + window.parent.cnt.value);
						setTimeout(function(){
							$(top.document).find(".carousel-inner").children()[0].setAttribute("class", "carousel-item");
							$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
							$(top.document).find(".carousel-inner").children()[2].setAttribute("class", "carousel-item");
							$(top.document).find(".carousel-inner").children()[3].setAttribute("class", "carousel-item active");
							$(top.document).find(".carousel-indicators").children()[0].removeAttribute("class");
							$(top.document).find(".carousel-indicators").children()[0].removeAttribute("aria-current");
							$(top.document).find(".carousel-indicators").children()[1].removeAttribute("class");
							$(top.document).find(".carousel-indicators").children()[1].removeAttribute("aria-current");
							$(top.document).find(".carousel-indicators").children()[2].removeAttribute("class");
							$(top.document).find(".carousel-indicators").children()[2].removeAttribute("aria-current");
							$(top.document).find(".carousel-indicators").children()[3].setAttribute("class", "active");
							$(top.document).find(".carousel-indicators").children()[3].setAttribute("aria-current", "true");
						}, 2000);
						
						setTimeout(function(){
							retry();
						}, 4000);
						
				}
				
				if (window.parent.name.value != "" &&
						window.parent.addr.value != "" &&
						window.parent.phoneNo.value != "" &&
						window.parent.temp.value != "") {
					measure();
						if ( parseFloat(window.parent.temp.value) > 35.5 && parseFloat(window.parent.temp.value) < 37.5 && window.parent.cnt.value == 2 ) { // 재측정 후 정상이면
							console.log("재측정 후 정상");
							setTimeout(function(){
								ok();
							}, 2000);							
						} else if ((parseFloat(window.parent.temp.value) < 35.5 || parseFloat(window.parent.temp.value) > 37.5) && window.parent.cnt.value == 2) { // 재측정 후 비정상이면
							console.log("재측정 후 비정상");
							console.log(window.parent.cnt.value);
							//console.log($(top.document).find("#retry"));
							$(top.document).find("#retry").removeAttr("src");
							$(top.document).find("#retry").attr("src", "/resources/img/fail.png");
							setTimeout(function(){
								nk();
							}, 2000);							
						}
				}
		} // close else
	}
});


function qr() {
	//alert("step1 finish");
	$(top.document).find("rect")[4].removeAttribute("fill");
	$(top.document).find("rect")[4].setAttribute("fill", "#008000");
	
	$(top.document).find(".carousel-inner").children()[0].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item active");
	$(top.document).find(".carousel-inner").children()[2].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[3].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[1].setAttribute("class", "active");
	$(top.document).find(".carousel-indicators").children()[1].setAttribute("aria-current", "true");
	$(top.document).find(".carousel-indicators").children()[2].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[2].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[3].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[3].removeAttribute("aria-current");
}

function measure() {
	//alert("step2 finish");
	$(top.document).find("rect")[4].removeAttribute("fill");
	$(top.document).find("rect")[4].setAttribute("fill", "#008000");
	$(top.document).find("rect")[5].removeAttribute("fill");
	$(top.document).find("rect")[5].setAttribute("fill", "#008000");
	$(top.document).find("div.carousel-caption h1")[1].innerHTML = "체온 측정 중입니다";
}

function ok() { // 사람이 결과를 볼 수 있어야 하므로 ajax를 통해 db insert하고 결과 출력 후 2초 뒤 페이지 새로고침
	var data = {
			bizNo : $("#bizNo", parent.document).val(),
			name : $("#name", parent.document).val(),
			addr : $("#addr", parent.document).val(),
			phoneNo : $("#phoneNo", parent.document).val(),
			temp : $("#temp", parent.document).val(),
			status : "정상"
	}
	$.ajax({
		type: "post",
		url: "/user/insertData",
		data: data,
		success: function(result) {
			//to do
		},
		error: function(e) {
			console.log(e);
		}
	});
	$(top.document).find("rect")[4].removeAttribute("fill");
	$(top.document).find("rect")[4].setAttribute("fill", "#008000");
	$(top.document).find("rect")[5].removeAttribute("fill");
	$(top.document).find("rect")[5].setAttribute("fill", "#008000");
	$(top.document).find("rect")[6].removeAttribute("fill");
	$(top.document).find("rect")[6].setAttribute("fill", "#008000");
	$(top.document).find(".carousel-inner").children()[0].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[2].setAttribute("class", "carousel-item active");
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[2].setAttribute("class", "active");
	$(top.document).find(".carousel-indicators").children()[2].setAttribute("aria-current", "true");
	$(top.document).find(".carousel-indicators").children()[3].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[3].removeAttribute("aria-current");
	
	setTimeout(function() {
		parent.document.location.reload();
	}, 2000);
}

function nk() {
	var data = {
			bizNo : $("#bizNo", parent.document).val(),
			name : $("#name", parent.document).val(),
			addr : $("#addr", parent.document).val(),
			phoneNo : $("#phoneNo", parent.document).val(),
			temp : $("#temp", parent.document).val(),
			status : "발생"
	}
	$.ajax({
		type: "post",
		url: "/user/insertData",
		data: data,
		success: function(result) {
			//to do
		},
		error: function(e) {
			console.log(e);
		}
	});
	$(top.document).find("div.carousel-caption h1")[3].innerHTML = "입장 불가. 가까운 진료소에서 검사 해주세요";
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[2].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[2].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[3].setAttribute("class", "active");
	$(top.document).find(".carousel-indicators").children()[3].setAttribute("aria-current", "true");
	$(top.document).find(".carousel-inner").children()[0].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[2].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[3].setAttribute("class", "carousel-item active");
	
	
	//비정상 체온 등록될 때 socket으로 데이터 전송
	var socket = io('http://localhost:3000/');
	var lati = window.parent.lati.value;
	var longi = window.parent.longi.value;
	var corpName = window.parent.corpName.value;
	var corpPhoneNo = window.parent.corpPhoneNo.value;
	
	socket.emit("status", "warning", lati, longi, corpName, corpPhoneNo);
	
	setTimeout(function() {
		parent.document.location.reload();
	}, 2000);
}

function retry() {
	//alert("재측정");
	window.parent.cnt.value = 2;
	$(top.document).find("div.carousel-caption h1")[1].innerHTML = "step2-1. 재측정. 센서에 손목을 밀착시켜 주세요";
	$(top.document).find("rect")[5].removeAttribute("fill");
	$(top.document).find("rect")[5].setAttribute("fill", "#FF0000");
	$(top.document).find(".carousel-inner").children()[0].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item active");
	$(top.document).find(".carousel-inner").children()[2].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[3].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[1].setAttribute("class", "active");
	$(top.document).find(".carousel-indicators").children()[1].setAttribute("aria-current", "true");
	$(top.document).find(".carousel-indicators").children()[2].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[2].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[3].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[3].removeAttribute("aria-current");
	window.parent.temp.value = "";
	
}
