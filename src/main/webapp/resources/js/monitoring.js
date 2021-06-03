/**
 * 
 */
//chart js
function callChart() {
	var completed = 0;
	var notAns = 0;
	var waited = 0;
	var occured = 0;
	var stat = document.querySelectorAll("td.status");
	stat.forEach(function(item){
		if (item.innerHTML == "완료") completed += 1;
		if (item.innerHTML == "불응") notAns += 1;
		if (item.innerHTML == "발생") occured += 1;
		if (item.innerHTML == "대기") waited += 1;
		});
	
	const data = {
			  labels: [
				'완료',
			    '불응',
			    '발생',
			    '대기'
			  ],
			  datasets: [{
			    label: '오늘 발생 현황',
			    data: [completed, notAns, occured, waited], // 발생 수
			    backgroundColor: [
			      'rgb(24, 252, 24)',
			      'rgb(255, 24, 24)',
			      'rgb(255, 127, 0)',
			      'rgb(255, 205, 86)'
			    ],
			    hoverOffset: 4
			  }]
			};
	const config = {
			  type: 'doughnut',
			  data: data,
			  options: {
				    plugins: {
				      legend: {
				        title: {
				          display: true,
				          text: '금일 처리 현황',
				        }
				      }
				    },
				    responsive: true
				  }
			};
	var chart = new Chart(
		    document.getElementById('myChart'),
		    config
		  );
	const actions = [
		{
		    name: 'Title Position: center (default)',
		    handler(chart) {
		      chart.options.plugins.legend.align = 'center';
		      chart.options.plugins.legend.title.position = 'center';
		      chart.update();
		    }
		  },
		  {
		    name: 'Position: bottom',
		    handler(chart) {
		      chart.options.plugins.legend.position = 'bottom';
		      chart.update();
		    }
		  },
		];
}
//chart js end

function mapMover() {
	$(".mover").click(function(e){
		e.preventDefault();
		//console.log("지도 이동");
		var lati = ($(this).children(".lati").val());
		var longi = ($(this).children(".longi").val());
		var corpName = ($(this).parent().text());
		var corpPhoneNo = ($(this).parent().next().text());
		
		var loc = new naver.maps.LatLng(lati, longi);
		
		map.panTo(loc);
		
		var marker = new naver.maps.Marker({
			position: loc,
			map: map
		});
		
		var contentString = [
	        '<div class="iw_inner">',
	        '   <h3>'+corpName+'</h3>',
	        '   <p>연락처 : <br />'+corpPhoneNo+'</p>',
	        '</div>'
	    ].join('');

		var infowindow = new naver.maps.InfoWindow({
		    content: contentString
		});

		naver.maps.Event.addListener(marker, "click", function(e) {
		    if (infowindow.getMap()) {
		        infowindow.close();
		    } else {
		        infowindow.open(map, marker);
		    }
		});

		infowindow.open(map, marker);
	});
}

function statusCss() {
	$(".status").each(function(){
		if ($(this).html() == "불응") {
			$(this).css("color", "red");
			//$(this).parent().children("td").css("color", "red");
		}
		if ($(this).html() == "대기") {
			$(this).css("color", "yellow");
			//$(this).parent().children("td").css("color", "yellow");
		}
			
		if ($(this).html() == "완료") {
			$(this).css("color", "green");
			//$(this).parent().children("td").css("color", "green");
		}
		if ($(this).html() == "발생" ) {
			$(this).css("color", "orange");
		}
	});
}
function btnAct() { // chart의 data로 접근할 수 있는 방법?
	var completedBtn = $(".btn-success");
	$(".btn-success").click(function(){
		//console.log($(this).parent().children("input").val());
		//console.log("완료 버튼 클릭");
		
		var data = {
				bno : $(this).parent().children("input").val(),
				status : "완료"
		}
		$.ajax({
			type: "post",
			url: "/user/updateStatus",
			data: data,
			success: function(result) {
				//to do
			},
			error: function(e) {
				console.log(e);
			}
		});
		
		$(this).parent().next().html("완료");
		$(this).parent().next().css("color", "green");
		var updateChart = $(".sidebar-sticky").load(location.href + " .sidebar-sticky", function() {
			//차트 업데이트
			callChart();
		});
	});
	var waitedBtn = $(".btn-warning");
	$(".btn-warning").click(function(){
		//console.log("대기 버튼 클릭");
		var data = {
				bno : $(this).parent().children("input").val(),
				status : "대기"
		}
		$.ajax({
			type: "post",
			url: "/user/updateStatus",
			data: data,
			success: function(result) {
				//to do
			},
			error: function(e) {
				console.log(e);
			}
		});
		$(this).parent().next().html("대기");
		$(this).parent().next().css("color", "yellow");
		var updateChart = $(".sidebar-sticky").load(location.href + " .sidebar-sticky", function() {
			//차트 업데이트
			callChart();
		});
	});
	var failBtn = $(".btn-danger");
	$(".btn-danger").click(function(){
		//console.log("불응 버튼 클릭");
		var data = {
				bno : $(this).parent().children("input").val(),
				status : "불응"
		}
		$.ajax({
			type: "post",
			url: "/user/updateStatus",
			data: data,
			success: function(result) {
				//to do
			},
			error: function(e) {
				console.log(e);
			}
		});
		$(this).parent().next().html("불응");
		$(this).parent().next().css("color", "red");
		var updateChart = $(".sidebar-sticky").load(location.href + " .sidebar-sticky", function() {
			//차트 업데이트
			callChart();
		});
	});
}
$(document).ready(function(){
	var mapOptions = {
		    center: new naver.maps.LatLng(35.542496, 129.338290),
		    zoom: 18
		};
		
	var map = new naver.maps.Map('map', mapOptions);
	
	//웹 소켓 이벤트 리스너
	var socket = io('http://localhost:3000/');
	//status의  argument1로부터 조건 판단
	socket.on("status", (arg1, arg2, arg3, arg4, arg5) => {
		if (arg1 == "warning") {
			
			//console.log("status : " + arg1);
			//console.log("location : " + arg2 + ", " + arg3 + ", " + arg4 + ", " + arg5);
			
			//console.log("log update....");
			var updateLog = $("#log").load(location.href + " #log", function() {
				var updateChart = $(".sidebar-sticky").load(location.href + " .sidebar-sticky", function() {
					//차트 업데이트
					callChart();
				});
				//상호명 클릭 시 해당 위치로 이동
				$(".mover").click(function(e){
					e.preventDefault();
					//console.log("지도 이동");
					var lati = ($(this).children(".lati").val());
					var longi = ($(this).children(".longi").val());
					var corpName = ($(this).parent().text());
					var corpPhoneNo = ($(this).parent().next().text());
					
					var loc = new naver.maps.LatLng(lati, longi);
					
					map.panTo(loc);
					
					var marker = new naver.maps.Marker({
						position: loc,
						map: map
					});
					
					var contentString = [
				        '<div class="iw_inner">',
				        '   <h3>'+corpName+'</h3>',
				        '   <p>연락처 : <br />'+corpPhoneNo+'</p>',
				        '</div>'
				    ].join('');

					var infowindow = new naver.maps.InfoWindow({
					    content: contentString
					});

					naver.maps.Event.addListener(marker, "click", function(e) {
					    if (infowindow.getMap()) {
					        infowindow.close();
					    } else {
					        infowindow.open(map, marker);
					    }
					});

					infowindow.open(map, marker);
				});
				//상태 css
				statusCss();
				//버튼 동작
				btnAct();
			}); //이상체온 검출 테이블만 새로고침 및 #log부분 콜백함수
			
			//소켓에서 신호 올 때
			//지도관련
			var loc = new naver.maps.LatLng(arg2, arg3);
			map.panTo(loc);
			
			var marker = new naver.maps.Marker({
				position: loc,
				map: map
			})
			var contentString = [
		        '<div class="iw_inner">',
		        '   <h3>'+arg4+'</h3>',
		        '   <p>연락처 : <br />'+arg5+'</p>',
		        '</div>'
		    ].join('');

			var infowindow = new naver.maps.InfoWindow({
			    content: contentString
			});

			naver.maps.Event.addListener(marker, "click", function(e) {
			    if (infowindow.getMap()) {
			        infowindow.close();
			    } else {
			        infowindow.open(map, marker);
			    }
			});

			infowindow.open(map, marker);
			var blink = setInterval(function() {
				//console.log("1초마다 점멸");
				var circle = new naver.maps.Circle({ // 원 생성
					map: map,
					center: loc,
					radius: 200,
					fillColor: 'crimson',
					fillOpacity: 0.8
				});
				setTimeout(function() { // 1초 후 제거
					$("path").remove();
				}, 1000);
			}, 2000);
			setTimeout(function() {
				clearTimeout(blink);
			}, 6500);
		}
		
	});
	//상호명 클릭 시 해당 위치로 이동
	$(".mover").click(function(e){
		e.preventDefault();
		//console.log("지도 이동");
		var lati = ($(this).children(".lati").val());
		var longi = ($(this).children(".longi").val());
		var corpName = ($(this).parent().text());
		var corpPhoneNo = ($(this).parent().next().text());
		
		var loc = new naver.maps.LatLng(lati, longi);
		
		map.panTo(loc);
		
		var marker = new naver.maps.Marker({
			position: loc,
			map: map
		});
		
		var contentString = [
	        '<div class="iw_inner">',
	        '   <h3>'+corpName+'</h3>',
	        '   <p>연락처 : <br />'+corpPhoneNo+'</p>',
	        '</div>'
	    ].join('');

		var infowindow = new naver.maps.InfoWindow({
		    content: contentString
		});

		naver.maps.Event.addListener(marker, "click", function(e) {
		    if (infowindow.getMap()) {
		        infowindow.close();
		    } else {
		        infowindow.open(map, marker);
		    }
		});

		infowindow.open(map, marker);
	});
	//상태 css
	statusCss();
	//버튼 동작
	btnAct();
	//차트 생성
	callChart();
});
