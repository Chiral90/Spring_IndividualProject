/**
 * 
 */

$(document).ready(function(){
	var name = $("#name")
	var addr = $("#addr")
	var no = $("#phoneNo")
	var temp = $("#temp")
	
	var inputName = $("#psuedoName").val();
	var inputAddr = $("#psuedoAddr").val();
	var inputNo = $("#psuedoPhoneNo").val();
	var inputTemp = $("#psuedoTemp").val();
	//var signal = $("rect")[4];
	//console.log(signal);
	
	$("#name").keyup(function(){
		
		//signal.children("svg").css("background", "red");
		
	});
	
	$(".w-100").click(function(){
		
	});
	
	/*
	$(".w-100").click(function(e){
		e.preventDefault();
		name.attr("value", inputName);
		addr.attr("value", inputAddr);
		no.attr("value", inputNo);
		temp.attr("value", inputTemp);
		
		//console.log(temp.attr("value"));
		if(name.attr("value") && addr.attr("value") && no.attr("value")){
			$("rect")[4].removeAttribute("fill");
			$("rect")[4].setAttribute("fill", "#008000");
			
			$(".carousel-inner").children()[0].setAttribute("class", "carousel-item");
			$(".carousel-inner").children()[1].setAttribute("class", "carousel-item active");
			$(".carousel-indicators").children()[0].removeAttribute("class");
			$(".carousel-indicators").children()[0].removeAttribute("aria-current");
			$(".carousel-indicators").children()[1].setAttribute("class", "active");
			$(".carousel-indicators").children()[1].setAttribute("aria-current", "true");
			$("form[class='needs-validation']").submit();
			
		}
		if (name.attr("value") && addr.attr("value") && no.attr("value") && temp.attr("value")) {
			//console.log(temp.attr("value"));
			$("rect")[5].removeAttribute("fill");
			$("rect")[5].setAttribute("fill", "#008000");
			
			$(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
			$(".carousel-inner").children()[2].setAttribute("class", "carousel-item active");
			$(".carousel-indicators").children()[1].removeAttribute("class");
			$(".carousel-indicators").children()[1].removeAttribute("aria-current");
			$(".carousel-indicators").children()[2].setAttribute("class", "active");
			$(".carousel-indicators").children()[2].setAttribute("aria-current", "true");
			//console.log("changed");
			$("form[class='needs-validation']").submit();
		}
		if (parseFloat(temp.attr("value")) > 35.5 && parseFloat(temp.attr("value")) < 37.5) {
			//console.log(parseFloat(temp.attr("value")) > 35.5 && parseFloat(temp.attr("value")) < 37.5);
			$("rect")[6].removeAttribute("fill");
			$("rect")[6].setAttribute("fill", "#008000");
			
			$(".carousel-inner").children()[1].setAttribute("class", "carousel-item");
			$(".carousel-inner").children()[2].setAttribute("class", "carousel-item active");
			$(".carousel-indicators").children()[1].removeAttribute("class");
			$(".carousel-indicators").children()[1].removeAttribute("aria-current");
			$(".carousel-indicators").children()[2].setAttribute("class", "active");
			$(".carousel-indicators").children()[2].setAttribute("aria-current", "true");
			
		}
		if (parseFloat(temp.attr("value")) < 35.5 || parseFloat(temp.attr("value")) > 37.5) {
			$(".carousel-inner").children()[2].setAttribute("class", "carousel-item");
			$(".carousel-inner").children()[3].setAttribute("class", "carousel-item active");
			$(".carousel-indicators").children()[2].removeAttribute("class");
			$(".carousel-indicators").children()[2].removeAttribute("aria-current");
			$(".carousel-indicators").children()[3].setAttribute("class", "active");
			$(".carousel-indicators").children()[3].setAttribute("aria-current", "true");
		}
		
	});
	*/
});