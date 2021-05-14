<%@ include file="../includes/adminHeader.jsp" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%-- <%@ page session="false" %> --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4lz2pt0zi5"></script> -->
<script src="http://localhost:3000/socket.io/socket.io.js"></script>

<script type="text/javascript" src="/resources/js/monitoring.js"></script>
<!-- Custom styles for this template -->
<link href="/resources/css/dashboard.css" rel="stylesheet">
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">실시간 발생 현황</h1>
        
      </div>

      <%-- <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas> --%>
      
      <!-- Naver Map api -->
		<div class="my-4 w-100">
		
			<!-- <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4lz2pt0zi5"></script> -->
   
				<div id="map" style="width:900;height:600px"></div>
				
			<script>
				var mapOptions = {
				    center: new naver.maps.LatLng(35.542496, 129.338290),
				    zoom: 20
				};
				
				var map = new naver.maps.Map('map', mapOptions);
			</script>
		
		</div>
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2>이상 체온 검출 로그</h2>
	    </div>
      
      <div class="table-responsive" id="log">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>상호명</th>
              <th>업체 연락처</th>
              <th>체온</th>
              <th>방문객 이름</th>
              <th>방문객 주소</th>
              <th>방문객 연락처</th>
              <th>검출 시각</th>
              <th>대응</th>
              <th>상태</th>
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
	           		<td>
	           			<input type="hidden" value="<c:out value='${board.bno}' />">
	           			<button class="btn btn-success btn-sm">완료</button> 
	           			<button class="btn btn-warning btn-sm">대기</button> 
	           			<button class="btn btn-danger btn-sm">불응</button>
	           		</td>
	           		<td><c:out value="${board.status }" /></td>
	           	</tr>
          </c:forEach>
          </tbody>
        </table>
      </div>
    </main>
   
<%@ include file="../includes/adminFooter.jsp" %>
