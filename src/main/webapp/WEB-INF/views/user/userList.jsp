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
    <script src="/resources/js/userList.js"></script>
   
    <!-- Bootstrap core CSS -->
	<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="/resources/css/userList.css">
	<style>
		.btn {position: fixed;
			top: 50px;
			right: 50px;}
    </style>
    
  </head>
  <body>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">등록 업체 리스트</h1>
        
      </div>
      
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>사업자 번호</th>
              <th>상호명</th>
              <th>주소</th>
              <th>연락처</th>
              <th>업종</th>
              <th>기록</th>
            </tr>
          </thead>
          <tbody>
              <c:forEach items="${list}" var="board">
	           	<tr>
	           		<td><c:out value="${board.bizNo }" /></td>
	           		<td><c:out value="${board.corpName }" /></td>
	           		<td><c:out value="${board.addr }" /></td>
	           		<td><c:out value="${board.corpPhoneNo }" /></td>
	           		<td><c:out value="${board.sectors }" /></td>
	           		<td><a href="<c:out value='${board.bizNo }' />"><span data-feather="layers"></span></a></td>
	           	</tr>
	           </c:forEach>
          </tbody>
        </table>
      </div>
    </main>
    <button onclick="window.close()" class="btn btn-lg btn-danger close">닫기</button>
    <form id="dailyList"><input name="bizNo" type="hidden"><input name="regdate" type="hidden"><input name="corpName" type="hidden"></form>
    
<%@ include file="../includes/adminFooter.jsp" %>