<%@ include file="../includes/header.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- Bootstrap core CSS -->
<link href="/resources/css/bootstrap.min.css" rel="stylesheet">

<!-- Custom styles for this template -->
<link href="/resources/css/dashboard.css" rel="stylesheet">
<link href="/resources/css/board.css" rel="stylesheet">
<div class="div">
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">방문 기록</h1>
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
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
              <c:forEach items="${list}" var="board">
	           	<tr>
	           		<td><c:out value="${board.bno }" /></td>
	           		<td><c:out value="${board.name }" /></td>
	           		<td><c:out value="${board.addr }" /></td>
	           		<td><c:out value="${board.phoneNo }" /></td>
	           		<td><c:out value="${board.temp }" /></td>
	           		<td><c:out value="${board.regdate }" /></td>
	           		<%-- <td><fmt:formatDate pattern="yyyy-MM-dd [E] a hh:mm:ss" value="${board.regdate }" /></td> --%>
	           		<td></td>
	           		<!-- date formatting 필요 @mysql -->                     		
	           		<%-- 
	           		<td><fmt:formatDate pattern="yyyy-MM-dd" value="${board.regdate }"></fmt:formatDate></td>
	           		<td><fmt:formatDate pattern="yyyy-MM-dd" value="${board.updateDate }"></fmt:formatDate></td>
	           		 --%>
	           	</tr>
	           </c:forEach>
          </tbody>
        </table>
      </div>
    </main>
    </div>



    <script src="/resources/js/bootstrap.bundle.min.js"></script>

      <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script>
      <script src="/resources/js/dashboard.js"></script>
  </body>
</html>
