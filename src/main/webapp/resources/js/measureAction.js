	/**
 * 
 */
$(document).ready(function(){
	//소켓
	
	console.log(window.parent.cnt.value);
		
	//아두이노 구현 시 -> input value 변화 감지 (on("propertychange change keyup paste input", function() {})해서 parent form submit (target="iframe" action="/user/measureAction")   
	
	//id로 받아오는 것 같음

	//조건식 만족하면 부모의 form을 여기서 submit by ajax

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
		setTimeout(function(){ // 3초 후에 판정
		
			if (parseFloat(window.parent.temp.value) > 35.5 && parseFloat(window.parent.temp.value) < 37.5 && window.parent.cnt.value == 1) { // 정상범위이면
				console.log("초회차 정상");
				ok();			
			
			} else { // 비정상이면

			setTimeout(function(){ // 3초 후 한 번 더 측정
				if (window.parent.cnt.value == 1){
					retry();
				}
				
				if (window.parent.name.value != "" &&
						window.parent.addr.value != "" &&
						window.parent.phoneNo.value != "" &&
						window.parent.temp.value != "") {
					measure();
					setTimeout(function(){
						if ( parseFloat(window.parent.temp.value) > 35.5 && parseFloat(window.parent.temp.value) < 37.5 && window.parent.cnt.value == 2 ) { // 재측정 후 정상이면
							console.log("재측정 후 정상");
							ok();
							
						} else { // 재측정 후 비정상이면
							console.log("재측정 후 비정상");
							nk();
						}
					}, 3000);
				}
			}, 3000);
		} // close else
		}, 3000);
	}
});


function qr() {
	alert("step1 finish");
	$(top.document).find("rect")[4].removeAttribute("fill");
	$(top.document).find("rect")[4].setAttribute("fill", "#008000");
	
	$(top.document).find(".carousel-inner").children()[0].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item active");
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[0].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[1].setAttribute("class", "active");
	$(top.document).find(".carousel-indicators").children()[1].setAttribute("aria-current", "true");
}

function measure() {
	alert("step2 finish");
	$(top.document).find("rect")[5].removeAttribute("fill");
	$(top.document).find("rect")[5].setAttribute("fill", "#008000");
	$(top.document).find("div.carousel-caption h1")[1].innerHTML = "체온 측정 중입니다";
}

function ok() {
	var data = {
			bizNo : $("#bizNo", parent.document).val(),
			name : $("#name", parent.document).val(),
			addr : $("#addr", parent.document).val(),
			phoneNo : $("#phoneNo", parent.document).val(),
			temp : $("#temp", parent.document).val()
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
	$(top.document).find("rect")[6].removeAttribute("fill");
	$(top.document).find("rect")[6].setAttribute("fill", "#008000");
	$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[2].setAttribute("class", "carousel-item active");
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[2].setAttribute("class", "active");
	$(top.document).find(".carousel-indicators").children()[2].setAttribute("aria-current", "true");
	
	setTimeout(function() {
		parent.document.location.reload();
	}, 3000);
}

function nk() {
	var data = {
			bizNo : $("#bizNo", parent.document).val(),
			name : $("#name", parent.document).val(),
			addr : $("#addr", parent.document).val(),
			phoneNo : $("#phoneNo", parent.document).val(),
			temp : $("#temp", parent.document).val()
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
	$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[3].setAttribute("class", "carousel-item active");
	$(top.document).find("div.carousel-caption h1")[3].innerHTML = "입장 불가. 가까운 진료소에서 검사 해주세요";
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[3].setAttribute("class", "active");
	$(top.document).find(".carousel-indicators").children()[3].setAttribute("aria-current", "true");
	
	//비정상 체온 등록될 때 socket으로 데이터 전송
	var socket = io('http://localhost:3000/');
	var lati = window.parent.lati.value;
	var longi = window.parent.longi.value;
	socket.emit("status", "warning", lati, longi);
	
	setTimeout(function() {
		parent.document.location.reload();
	}, 3000);
}

function retry() {
	alert("재측정");
	window.parent.cnt.value = 2;
	$(top.document).find("div.carousel-caption h1")[1].innerHTML = "step2. 센서에 손목을 밀착시켜 주세요";
	$(top.document).find("rect")[5].removeAttribute("fill");
	$(top.document).find("rect")[5].setAttribute("fill", "#FF0000");
	$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
	$(top.document).find(".carousel-inner").children()[3].setAttribute("class", "carousel-item active");
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("class");
	$(top.document).find(".carousel-indicators").children()[1].removeAttribute("aria-current");
	$(top.document).find(".carousel-indicators").children()[3].setAttribute("class", "active");
	$(top.document).find(".carousel-indicators").children()[3].setAttribute("aria-current", "true");
	window.parent.temp.value = "";
	
}
