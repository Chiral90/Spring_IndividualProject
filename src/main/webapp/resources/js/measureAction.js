/**
 * 
 */

$(document).ready(function(){
	//id로 받아오는 것 같음
	//console.log(window.parent.bizNo.value);
	//console.log(window.parent.name.value);
	//console.log(window.parent.addr.value);
	//console.log(window.parent.phoneNo.value);
	//console.log(window.parent.temp.value);

		
	//console.log($(top.document).find("#name").val());
	//console.log($("#name", parent.document));
	
	//console.log("hidden : " + $("#name", parent.document).val());
	//console.log($(top.document).find("div.carousel-caption h1")[3].innerHTML);
	//console.log($(top.document).find(".carousel-inner").children()[3].find(".container").find(".carousel-caption").find("h1"));
	//console.log($(top.document).find(".carousel-inner").children()[3].find("h1").html());
	
	//조건식 만족하면 부모의 form을 여기서 submit
	var cnt = 1;
	if ( // 방문객 정보가 입력되면
			window.parent.name.value != "" &&
			window.parent.addr.value != "" &&
			window.parent.phoneNo.value != "" &&
			window.parent.temp.value == ""
	) {
		alert("step1 finish");
		$(top.document).find("rect")[4].removeAttribute("fill");
		$(top.document).find("rect")[4].setAttribute("fill", "#008000");
		
		$(top.document).find(".carousel-inner").children()[0].setAttribute("class", "carousel-item");
		$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item active");
		$(top.document).find(".carousel-indicators").children()[0].removeAttribute("class");
		$(top.document).find(".carousel-indicators").children()[0].removeAttribute("aria-current");
		$(top.document).find(".carousel-indicators").children()[1].setAttribute("class", "active");
		$(top.document).find(".carousel-indicators").children()[1].setAttribute("aria-current", "true");
	} if ( // 체온 값이 입력되면
			window.parent.name.value != "" &&
			window.parent.addr.value != "" &&
			window.parent.phoneNo.value != "" &&
			window.parent.temp.value != ""
	) {
		alert("step2 finish");
		$(top.document).find("rect")[5].removeAttribute("fill");
		$(top.document).find("rect")[5].setAttribute("fill", "#008000");
		$(top.document).find("div.carousel-caption h1")[1].innerHTML = "체온 측정 중입니다";
		
		
		setTimeout(function(){ // 체온 값 입력 5초 후
			if (parseFloat(window.parent.temp.value) > 35.5 && parseFloat(window.parent.temp.value) < 37.5 && cnt == 1) { // 정상범위이면
				$(top.document).find("rect")[6].removeAttribute("fill");
				$(top.document).find("rect")[6].setAttribute("fill", "#008000");
				
				$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
				$(top.document).find(".carousel-inner").children()[2].setAttribute("class", "carousel-item active");
				$(top.document).find(".carousel-indicators").children()[1].removeAttribute("class");
				$(top.document).find(".carousel-indicators").children()[1].removeAttribute("aria-current");
				$(top.document).find(".carousel-indicators").children()[2].setAttribute("class", "active");
				$(top.document).find(".carousel-indicators").children()[2].setAttribute("aria-current", "true");
				setTimeout(function(){
					$(top.document).find(".needs-validation").removeProp("target").prop("action", "/user/insertData");
					$(top.document).find(".needs-validation").submit();
				}, 5000);
				
			} else { // 비정상이면
				alert("재측정");
				cnt += 1;
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
				
				setTimeout(function(){ // 3초 후 한 번 더 측정
					
					console.log(window.parent.temp.value);
					$(top.document).find(".carousel-inner").children()[3].setAttribute("class", "carousel-item");
					$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item active");
					$(top.document).find(".carousel-indicators").children()[3].removeAttribute("class");
					$(top.document).find(".carousel-indicators").children()[3].removeAttribute("aria-current");
					$(top.document).find(".carousel-indicators").children()[1].setAttribute("class", "active");
					$(top.document).find(".carousel-indicators").children()[1].setAttribute("aria-current", "true");
				}, 3000);
				
				//input temp값이 변경되는 것을 감지
				$(window.parent.temp).on("propertychange change keyup paste input", function() {
					$(top.document).find("rect")[5].removeAttribute("fill");
					$(top.document).find("rect")[5].setAttribute("fill", "#008000");
					$(top.document).find("div.carousel-caption h1")[1].innerHTML = "체온 측정 중입니다";
					setTimeout(function(){
						if (parseFloat(window.parent.temp.value) > 35.5 && parseFloat(window.parent.temp.value) < 37.5 && cnt == 2) { // 재측정 후 정상이면
							$(top.document).find("rect")[6].removeAttribute("fill");
							$(top.document).find("rect")[6].setAttribute("fill", "#008000");
							
							$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
							$(top.document).find(".carousel-inner").children()[2].setAttribute("class", "carousel-item active");
							$(top.document).find(".carousel-indicators").children()[1].removeAttribute("class");
							$(top.document).find(".carousel-indicators").children()[1].removeAttribute("aria-current");
							$(top.document).find(".carousel-indicators").children()[2].setAttribute("class", "active");
							$(top.document).find(".carousel-indicators").children()[2].setAttribute("aria-current", "true");
							setTimeout(function(){
								console.log(window.parent.temp.value);
								$(top.document).find(".needs-validation").removeProp("target").prop("action", "/user/insertData");
								$(top.document).find(".needs-validation").submit();
							}, 5000);
							
						} else { // 재측정 후 비정상이면
							$(top.document).find(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
							$(top.document).find(".carousel-inner").children()[3].setAttribute("class", "carousel-item active");
							$(top.document).find("div.carousel-caption h1")[3].innerHTML = "입장 불가. 가까운 진료소에서 검사 해주세요";
							$(top.document).find(".carousel-indicators").children()[1].removeAttribute("class");
							$(top.document).find(".carousel-indicators").children()[1].removeAttribute("aria-current");
							$(top.document).find(".carousel-indicators").children()[3].setAttribute("class", "active");
							$(top.document).find(".carousel-indicators").children()[3].setAttribute("aria-current", "true");
							setTimeout(function(){
								console.log(window.parent.temp.value);
								$(top.document).find(".needs-validation").removeProp("target").prop("action", "/user/insertData");
								$(top.document).find(".needs-validation").submit();
							}, 5000);
							
						}
					}, 3000);
				});
			}
		}, 3000);

	}
});