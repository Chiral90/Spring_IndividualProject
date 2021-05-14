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
    <!-- Tempus Dominus -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/js/tempusdominus-bootstrap-4.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/css/tempusdominus-bootstrap-4.min.css" />
	<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" />
    <script src="/resources/js/dailyList.js"></script>
   
    <!-- Bootstrap core CSS -->
	<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="/resources/css/userList.css">
	<style>
		.back {position: fixed;
			top: 120px;
			right: 50px;}
		.close {position: fixed;
			top: 50px;
			right: 50px;}
		.input-group-text {
			height: 100%;
		}
    </style>
    
  </head>
  <body>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">${param.corpName}</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
        
          <!-- <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button> -->
          
		    
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
              <th>처리시각</th>
              <th>처리 결과</th>
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
	           		<td><c:out value="${board.updateDate }" /></td>
	           		<td><c:out value="${board.status }" /></td>
	           	</tr>
	           </c:forEach>
          </tbody>
        </table>
      </div>
    </main>
    <button onclick="javascript:goList()" class="btn btn-lg btn-info back">목록</button>
    <button onclick="window.close()" class="btn btn-lg btn-danger close">닫기</button>
    <form id="dailyList"><input name="bizNo" type="hidden" value="${param.bizNo }"><input name="regdate" type="hidden" value="${param.regdate }"><input name="corpName" type="hidden" value="${param.corpName}"></form>
<%@ include file="../includes/adminFooter.jsp" %>