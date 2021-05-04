/**
 * 
 */

$(document).ready(function(){
	//id로 받아오는 것 같음
	console.log(window.parent.psuedoBizNo.value);
	console.log(window.parent.psuedoName.value);
	console.log(window.parent.psuedoAddr.value);
	console.log(window.parent.psuedoPhoneNo.value);
	console.log(window.parent.psuedoTemp.value);

	$(top.document).find("#name").attr("value", window.parent.psuedoName.value);
	$(top.document).find("#addr").attr("value", window.parent.psuedoAddr.value);
	$(top.document).find("#phoneNo").attr("value", window.parent.psuedoPhoneNo.value);
	
	console.log("hidden : " + window.parent.name);
	
	//조건식 만족하면 부모의 form을 여기서 submit
});