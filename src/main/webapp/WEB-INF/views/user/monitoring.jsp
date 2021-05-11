<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%-- <%@ page session="false" %> --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.82.0">
    <title>Dashboard Template · Bootstrap v5.0</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/dashboard/">
    <script  src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4lz2pt0zi5"></script>
    <script src="http://localhost:3000/socket.io/socket.io.js"></script>
	<script>
		var socket = io('http://localhost:3000/');
		socket.on("status", (arg1, arg2, arg3) => {
			console.log("status : " + arg1);
			console.log("location : " + arg2 + ", " + arg3);
		})
	</script>
    
    <script type="text/javascript" src="/resources/js/monitoring.js"></script>
    <!-- 화면이동 없이 주기적으로 업데이트 ; db업데이트 시 화면 업데이트하는 방법으로 바꾸면 더 좋을 듯 ; 문제 : 검출 로그를 업데이트 하지는 못함 -->
    <!-- <script type="text/javascript">
	  $(document).ready(function(){
		  setInterval(function() { //실행할 스크립트 }, 1000);
			  ajaxTest();
		  }, 3000);
	  });
	
	    function ajaxTest(){
	      $.ajax({
	        type : "GET",
	        url : "/user/monitoring",
	        dataType : "text",
	        error : function() {
	          alert('통신실패!!');
	        },
	        success : function() {
	          console.log("업데이트 성공");
	        }
	 
	      });
	    }
  </script>
	 -->
    

    <!-- Bootstrap core CSS -->
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">

  
    <!-- Custom styles for this template -->
    <link href="/resources/css/dashboard.css" rel="stylesheet">
  </head>
  <body>
    
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Foot Print (Monitoring)</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <a class="nav-link" id="sign" href="#"></a><form id="form"><input type="hidden"></form>
    </li>
  </ul>
</header>
<!-- 
<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              	대쉬보드
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file"></span>
              Orders
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Products
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="users"></span>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              Integrations
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav>
 -->
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">실시간 발생 현황</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>

      <%-- <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas> --%>
      
      <!-- Naver Map api -->
		<div class="my-4 w-100">
		
			<!-- <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4lz2pt0zi5"></script> -->
   
				<div id="map" style="width:900;height:600px"></div>
				
			<script>
				var mapOptions = {
				    center: new naver.maps.LatLng(35.542496, 129.338290),
				    zoom: 12
				};
				
				var map = new naver.maps.Map('map', mapOptions);
			</script>
		
		</div>
      <h2>이상 체온 검출 로그</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>상호명</th>
              <th>업체 연락처</th>
              <th>체온 측정 결과</th>
              <th>방문객 이름</th>
              <th>방문객 주소</th>
              <th>방문객 연락처</th>
              <th>검출 시각</th>
            </tr>
          </thead>
          <tbody>
          <c:forEach items="${list}" var="board">
	           	<tr>
	           		<td><c:out value="${board.corpName }" /></td>
	           		<td><c:out value="${board.corpPhoneNo }" /></td>
	           		<%-- <td><fmt:parseNumber type="number" pattern="00.00" value="${board.temp }" var="temp"/><c:out value="${temp }" /></td> --%>
	           		<td><c:out value="${board.temp }" /></td>
	           		<td><c:out value="${board.name }" /></td>
	           		<td><c:out value="${board.addr }" /></td>
	           		<td><c:out value="${board.phoneNo }" /></td>
	           		<td><c:out value="${board.regdate }" /></td>
	           	</tr>
          </c:forEach>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>


    <script src="/resources/js/bootstrap.bundle.min.js"></script>

      <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script>
      <script src="/resources/js/dashboard.js"></script>
  </body>
</html>
