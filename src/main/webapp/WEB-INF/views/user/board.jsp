<%@ include file="../includes/userHeader.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="/resources/js/board.js"></script>
<!-- Tempus Dominus -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/js/tempusdominus-bootstrap-4.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/css/tempusdominus-bootstrap-4.min.css" />
<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" />

<!-- Bootstrap core CSS -->
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">

<!-- Custom styles for this template -->
<link href="/resources/css/board.css" rel="stylesheet">
<div class="div">
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">방문 기록</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
		        <div class="col-sm-12">
		            <div class="form-group">
		                <div class="input-group date" id="datetimepicker" data-target-input="nearest">
		                    <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker"/>
		                    <div class="input-group-append" data-target="#datetimepicker" data-toggle="datetimepicker">
		                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
		                    </div>
		                </div>
		            </div>
		        </div>
		  
        </div>
      </div>
      
	<div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>순서</th>
              <th>이름</th>
              <th>주소</th>
              <th>연락처</th>
              <th>체온</th>
              <th>방문시각</th>
              <th>처리시각</th>
              <th>처리 결과</th>
            </tr>
          </thead>
          <tbody>
              <c:forEach items="${list}" var="board">
	           	<tr>
	           		<td><c:out value="${board.rn }" /></td>
	           		<td><c:out value="${board.name }" /></td>
	           		<td><c:out value="${board.addr }" /></td>
	           		<td><c:out value="${board.phoneNo }" /></td>
	           		<td><c:out value="${board.temp }" /></td>
	           		<td><c:out value="${board.regdate }" /></td>
	           		<td><c:out value="${board.updateDate }" /></td>
	           		<td><c:out value="${board.status }" /></td>
	           	</tr>
	           </c:forEach>
          </tbody>
        </table>
      </div>
  </body>
</html>
